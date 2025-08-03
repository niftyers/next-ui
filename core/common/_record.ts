import { TColorTheme } from "./_types";

export const RButtonTheme: Record<TColorTheme, string> = {
  default: "text-white bg-slate-700 border border-slate-700 hover:bg-slate-500 hover:text-white",
  muted: "text-slate-700 bg-slate-100 border border-slate-300 hover:bg-slate-200 hover:text-slate-800",
  info: "text-white bg-blue-600 border border-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white",
  success:
    "text-white bg-green-600 border border-green-600 hover:bg-green-50 hover:text-green-700 dark:border-green-800 dark:hover:bg-green-800 dark:hover:text-white",
  warning:
    "text-white bg-amber-500 border border-amber-500 hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-600 dark:hover:text-white",
  error:
    "text-white bg-red-600 border border-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-white",
};
