"use client";

import React, { ReactNode } from "react";
import { toast as sonnerToast } from "sonner";

import { CM } from "@/utils";
import { NhIcon } from "./_nh.icon";

interface INhNotify {
  id: string | number;
  title?: string;
  description: string;
  icon?: "info" | "success" | "warning" | "error";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  duration?: number;
}

const Icons: Record<string, ReactNode> = {
  success: <NhIcon icon="Success" className="size-10" />,
  info: <NhIcon icon="Info" className="size-10" />,
  warning: <NhIcon icon="Warning" className="size-10" />,
  error: <NhIcon icon="Error" className="size-10" />,
};

const IconsText: Record<string, string> = {
  success: "text-green-500 dark:text-green-400",
  info: "text-blue-500 dark:text-blue-500",
  warning: "text-amber-500 dark:text-amber-500",
  error: "text-rose-500 dark:text-rose-500",
};

const NotifyToast = (props: INhNotify) => {
  const { icon, title, description } = props;
  return (
    <div
      className={CM(
        "flex rounded-lg shadow-lg ring-1 w-full md:max-w-[364px] items-center p-3 gap-2",
        "bg-white ring-black/5 dark:bg-zinc-800 dark:ring-zinc-700"
      )}
    >
      {icon && <div className={CM("flex w-10", IconsText[icon])}>{Icons[icon]}</div>}
      <div className="flex flex-1 items-center">
        <div className="w-full">
          {title && (
            <p className={CM("text-sm font-medium", icon ? IconsText[icon] : "text-gray-900 dark:text-slate-400")}>
              {title}
            </p>
          )}
          <p className="text-sm text-gray-500 dark:text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const NhToast = (toast: Omit<INhNotify, "id">) => {
  return sonnerToast.custom(
    (id) => <NotifyToast id={id} title={toast.title} description={toast.description} icon={toast.icon} />,
    {
      position: toast.position || "bottom-left",
      duration: toast.duration || 3000,
    }
  );
};

export { NhToast };
