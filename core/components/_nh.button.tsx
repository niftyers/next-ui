"use client";

import { FC, ReactNode } from "react";

import { CM } from "@/utils";
import { RButtonTheme, TColorTheme } from "@/common";

import { NHLoader } from "./_nh.loader";

interface NHButton {
  type?: "button" | "submit";
  theme?: TColorTheme;
  caption: string;
  className?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

interface INHButtonLink extends NHButton {
  path: string;
  isExternal?: boolean;
}

export const NHButton: FC<NHButton> = ({
  type = "button",
  theme = "default",
  caption,
  className,
  iconStart,
  iconEnd,
  isLoading,
  isDisabled,
  onClick,
}) => {
  const handeClick = () => {
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      aria-label={caption || "button"}
      className={CM(
        "flex gap-1 items-center text-xs rounded-sm px-2 py.1.5 transition relative",
        RButtonTheme[theme],
        className,
        isLoading || isDisabled
          ? "!cursor-none disabled:!opacity-80"
          : "hover:cursor-pointer hover:animate-pulse"
      )}
      disabled={isDisabled || isLoading}
      onClick={handeClick}
    >
      <div className="relative flex items-center select-none hover:cursor-pointer">
        {iconStart && <div className="flex items-center">{iconStart}</div>}
        {caption && caption}
        {iconEnd && <div className="flex items-center">{iconEnd}</div>}
      </div>
      {isLoading && <NHLoader iconClassName="size-4" />}
    </button>
  );
};

export const NHButtonLink: FC<INHButtonLink> = ({
  theme = "default",
  path,
  caption,
  className,
  iconStart,
  iconEnd,
  isLoading,
  onClick,
}) => {
  const handeClick = () => {
    if (onClick) onClick();
  };
  return (
    <a
      aria-label={caption}
      href={path}
      className={CM(
        "flex gap-1 items-center text-xs rounded-sm px-2 py.1.5 transition hover:cursor-pointer",
        RButtonTheme[theme],
        className
      )}
      onClick={handeClick}
    >
      {iconStart && <div className="flex items-center">{iconStart}</div>}
      {caption && caption}
      {iconEnd && <div className="flex items-center">{iconEnd}</div>}
      {isLoading && <NHLoader />}
    </a>
  );
};
