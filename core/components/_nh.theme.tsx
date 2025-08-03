"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { CM } from "@/utils";
import { NhIcon } from "./_nh.icon";

const NhThemeToggle = ({ className, iconClassName }: { className?: string; iconClassName?: string }) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const mode = theme === "light" ? "Dark Mode" : "Light Mode";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label={mode}
      title={mode}
      className={CM("cursor-pointer whitespace-nowrap transition-colors p-1", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <NhIcon icon="Moon" className={CM("!size-4 rotate-0 scale-100 transition-all", iconClassName)} />
      ) : (
        <NhIcon icon="Sun" className={CM("!size-4 rotate-0 scale-100 transition-all", iconClassName)} />
      )}
      <span className="sr-only">{mode}</span>
    </button>
  );
};

export { NhThemeToggle };
