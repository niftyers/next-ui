"use client";

import { FC, ReactNode } from "react";

import { CM } from "@/utils";
import { RButtonTheme, TColorTheme } from "@/common";

import { NhSpinner } from "./_nh.loader";

interface INhButton {
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

const NhButton: FC<INhButton> = ({
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
        isLoading || isDisabled ? "!cursor-none disabled:!opacity-80" : "hover:cursor-pointer hover:animate-pulse"
      )}
      disabled={isDisabled || isLoading}
      onClick={handeClick}
    >
      <div className="relative flex items-center select-none hover:cursor-pointer">
        {iconStart && <div className="flex items-center">{iconStart}</div>}
        {caption && caption}
        {iconEnd && <div className="flex items-center">{iconEnd}</div>}
      </div>
      {isLoading && <NhSpinner iconClassName="size-4" />}
    </button>
  );
};

interface INhButtonLink extends INhButton {
  path: string;
  isExternal?: boolean;
}

const NhButtonLink: FC<INhButtonLink> = ({
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
      {isLoading && <NhSpinner />}
    </a>
  );
};

export { NhButton, NhButtonLink };
