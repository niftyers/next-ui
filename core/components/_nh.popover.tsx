"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";

import { GetAnimationVariants, TAnimation, TDirection } from "@/common";
import { CM } from "@/utils";

interface INHPopup {
  state: boolean;
  animation?: TAnimation;
  animationDirection?: TDirection;
  anchorRef: React.RefObject<HTMLElement>;
  style?: CSSProperties;
  className?: string;
  position?: "right" | "left" | "top" | "bottom";
  location?: "top" | "bottom";
  children: ReactNode;
  onClose: () => void;
}

export const NHPopup = ({
  state,
  style,
  className,
  children,
  position = "right",
  location = "bottom",
  anchorRef,
  onClose,
  animation = "fade",
  animationDirection = "left",
}: INHPopup) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const variants = GetAnimationVariants(animation, animationDirection);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, anchorRef]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        onClose();
      }}
    >
      {state && (
        <motion.div
          ref={popupRef}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2 }}
          className={CM(
            "absolute overflow-hidden z-50 border border-zinc-200 dark:border-zinc-800 shadow-md bg-white dark:bg-zinc-900",
            position === "right" && "left-full",
            position === "left" && "right-full",
            position === "top" && "bottom-full",
            position === "bottom" && "top-full",
            position === "right" && location === "top" && "top-1",
            position === "right" && location === "bottom" && "bottom-1",
            position === "left" && location === "top" && "top-1",
            position === "left" && location === "bottom" && "bottom-1",
            className
          )}
          style={style}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
