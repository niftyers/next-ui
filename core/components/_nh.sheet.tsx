"use client";

import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";

import { CM } from "@/utils";

import { NhIcon } from "./_nh.icon";

interface INhSheet {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  childrenClassName?: string;
  persist?: boolean;
  side?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  footer?: ReactNode;
  style?: CSSProperties;
  isButtonHidden?: boolean;
  contentClassName?: string;
}

const NhSheet: FC<INhSheet> = ({
  className,
  isOpen,
  onClose,
  children,
  childrenClassName,
  persist = false,
  side = "right",
  size = "md",
  title = "",
  description,
  footer,
  style,
  isButtonHidden = false,
  contentClassName,
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const SIZES = {
    sm: "w-64",
    md: "w-80",
    lg: "w-3/4",
    xl: "w-3/4",
    full: side === "left" || side === "right" ? "w-screen" : "h-screen",
  };

  const SIDES = {
    left: {
      classes: "left-0 top-0 h-screen",
      hiddenTransform: "-translate-x-full",
      visibleTransform: "translate-x-0",
    },
    right: {
      classes: "right-0 top-0 h-screen",
      hiddenTransform: "translate-x-full",
      visibleTransform: "translate-x-0",
    },
    top: {
      classes: "top-0 left-0 w-screen",
      hiddenTransform: "-translate-y-full",
      visibleTransform: "translate-y-0",
    },
    bottom: {
      classes: "bottom-0 left-0 w-screen",
      hiddenTransform: "translate-y-full",
      visibleTransform: "translate-y-0",
    },
  };

  const currentSide = SIDES[side];

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (persist || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const isOutsideSheet = sheetRef.current && !sheetRef.current.contains(target);
      const isInsideRadixSelect = target.closest("[data-radix-popper-content-wrapper]");

      if (isOutsideSheet && !isInsideRadixSelect) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, persist]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className={CM(
          "absolute inset-0 transition-opacity duration-300 ease-in-out",
          isVisible ? "opacity-100 bg-black/50" : "opacity-0 bg-black/0"
        )}
        style={style}
        onClick={persist ? undefined : onClose}
      />
      <div
        ref={sheetRef}
        className={CM(
          "absolute bg-white shadow-xl transition-all duration-300 ease-in-out p-4 flex flex-col",
          SIZES[size],
          currentSide.classes,
          isVisible ? currentSide.visibleTransform : currentSide.hiddenTransform,
          className
        )}
      >
        {!isButtonHidden && (
          <div
            className="absolute right-4 top-5 rounded-sm cursor-pointer hover:text-slate-400"
            title="Close"
            onClick={onClose}
          >
            <NhIcon icon="X" className="size-4" />
            <span className="sr-only">Close</span>
          </div>
        )}
        <div className="flex flex-col gap-1 mt-2 text-center sm:text-left">
          <div className="text-sm lg:text-base text-slate-700 font-semibold">{title}</div>
          {description && <div className="text-sm text-muted-foreground">{description}</div>}
        </div>
        <div className={CM("flex flex-col flex-1 min-h-0", contentClassName)}>
          <div className={CM("flex-1 overflow-y-auto mt-2 rounded-sm", childrenClassName)}>{children}</div>
          {footer && <div className="footer py-2 mt-auto h-12">{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export { NhSheet };
