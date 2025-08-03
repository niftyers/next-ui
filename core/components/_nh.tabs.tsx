"use client";

import { FC, memo, useState } from "react";
import { CM } from "@/utils";

interface INhTabHeader {
  captions: string[];
  onTabSelect: (val: string) => void;
  defaultValue?: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

const NhTabHeader: FC<INhTabHeader> = memo(
  ({ captions, onTabSelect, defaultValue, className, activeClassName, inactiveClassName }) => {
    const [activeTab, setActiveTab] = useState(defaultValue || captions[0]);

    const onHandleSelect = (val: string) => {
      setActiveTab(val);
      onTabSelect(val);
    };

    return (
      <div className="flex border-b mb-2">
        {captions.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              type="button"
              key={tab}
              aria-label={tab}
              title={tab}
              className={CM(
                "p-3 text-xs font-semibold transition-colors border-r border-b-2 border-b-white cursor-pointer text-slate-500 hover:text-sky-600",
                className,
                isActive
                  ? (activeClassName ?? "font-bold border-b-green-600 text-slate-700")
                  : (inactiveClassName ?? "")
              )}
              onClick={() => onHandleSelect(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>
    );
  }
);

NhTabHeader.displayName = "NhTabHeader";

export { NhTabHeader };
