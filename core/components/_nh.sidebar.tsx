"use client";

import Image from "next/image";
import * as React from "react";

import { CM } from "@/utils";
import { useIsMobile } from "@/hooks";
import { NhIcon } from "./_nh.icon";
import { NhSheet } from "./_nh.sheet";

const SIDEBAR_COOKIE_NAME = "_nh.xMv3s1d5bA4";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type TSidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const NhSidebarContext = React.createContext<TSidebarContext | null>(null);

const useNhSidebar = () => {
  const context = React.useContext(NhSidebarContext);
  if (!context) {
    throw new Error("useNhSidebar must be used within a SidebarProvider.");
  }

  return context;
};

const NhSidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<TSidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <NhSidebarContext.Provider value={contextValue}>
      <div className={CM("group/sidebar-wrapper flex min-h-svh w-full", className)} ref={ref} {...props}>
        {children}
      </div>
    </NhSidebarContext.Provider>
  );
});
NhSidebarProvider.displayName = "NhSidebarProvider";

const NhSidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useNhSidebar();
    return (
      <button
        ref={ref}
        type="button"
        data-sidebar="trigger"
        className={CM("size-5 cursor-pointer", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <NhIcon icon="PanelLeft" className="size-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    );
  }
);
NhSidebarTrigger.displayName = "NhSidebarTrigger";

const NhSidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useNhSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={CM(
          "flex h-full w-64 flex-col border-r",
          variant === "floating" && "rounded-lg border shadow-lg",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <NhSheet
        data-sidebar="sidebar"
        data-mobile="true"
        className="p-0 bg-slate-200 dark:bg-neutral-700 !z-[60]"
        side={side}
        isOpen={openMobile}
        onClose={() => setOpenMobile(openMobile)}
        childrenClassName="border-none flex h-full w-full flex-col"
        contentClassName="mt-10"
      >
        <div className="flex h-full w-full flex-col">{children}</div>
      </NhSheet>
    );
  }

  return (
    <div
      ref={ref}
      className={CM(
        "fixed inset-y-0 z-50 flex flex-col border-r transition-all duration-300",
        side === "left" ? "left-0" : "right-0",
        state === "expanded" ? "w-64" : "w-12",
        variant === "floating" && "m-2 rounded-lg border shadow-lg",
        className
      )}
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      {...props}
    >
      {children}
    </div>
  );
});
NhSidebar.displayName = "NhSidebar";

interface ISidebarHeader extends React.ComponentProps<"div"> {
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
}

const NhSidebarHeader = React.forwardRef<HTMLDivElement, ISidebarHeader>(
  ({ className, caption, imageSrc, imageAlt, ...props }, ref) => {
    const { state, isMobile } = useNhSidebar();
    if (isMobile) return null;
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={CM(
          "flex flex-col gap-2 px-2 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center gap-3 px-3">
          <div className="flex aspect-square size-6 items-center justify-center mt-[1px]">
            {imageSrc ? (
              <Image className="size-6 h-auto" src={imageSrc} alt={imageAlt || caption} width={32} height={32} />
            ) : (
              <NhIcon icon="Globe" className="size-6 h-auto text-slate-600" />
            )}
          </div>
          {state === "expanded" && (
            <div className="grid flex-1 text-left leading-tight">
              <span className="truncate font-bold select-text text-slate-700 dark:text-slate-50 text-base uppercase">
                {caption}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
);
NhSidebarHeader.displayName = "NhSidebarHeader";

const NhSidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={CM(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden border-slate-200 dark:border-neutral-600 bg-white dark:bg-neutral-700",
          className
        )}
        {...props}
      />
    );
  }
);
NhSidebarContent.displayName = "NhSidebarContent";

const NhSidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={CM(
          "flex flex-col gap-2 p-1 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800",
          className
        )}
        {...props}
      />
    );
  }
);
NhSidebarFooter.displayName = "NhSidebarFooter";

const NhContentWrapper = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    const { state, isMobile } = useNhSidebar();

    if (isMobile) {
      return (
        <div
          ref={ref}
          className={CM(
            "flex flex-col flex-1 overflow-hidden transition-[margin] duration-300 ease-in-out ml-0",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={CM(
          "flex flex-col flex-1 overflow-hidden transition-[margin] duration-300 ease-in-out",
          state === "expanded" ? "ml-64" : "ml-12",

          className
        )}
        {...props}
      />
    );
  }
);

export {
  NhContentWrapper,
  NhSidebarContent,
  NhSidebarFooter,
  NhSidebarHeader,
  NhSidebar,
  NhSidebarProvider,
  NhSidebarTrigger,
  useNhSidebar,
};
