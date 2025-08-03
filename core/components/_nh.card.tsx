import { IHtmlDiv } from "@/common";
import { CM } from "@/utils";

import { NhIcon, TIcon } from "./_nh.icon";

const NhCard = ({ className, children, ...props }: IHtmlDiv) => {
  return (
    <div
      className={CM(
        "rounded-md border shadow-sm cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface INhCardCount {
  className?: string;
  title: string;
  titleClassName?: string;
  icon?: TIcon;
  iconClassName?: string;
  description?: string;
  descriptionClassName?: string;
  count: number;
  countClassName?: string;
}

const NhCardCount = ({
  className,
  description,
  descriptionClassName,
  icon,
  iconClassName,
  title,
  titleClassName,
  count,
  countClassName,
}: INhCardCount) => {
  return (
    <div
      className={CM(
        "rounded-md shadow-sm cursor-pointer transition-all duration-200",
        "hover:shadow-lg hover:scale-105 hover:dark:shadow-zinc-900",
        "bg-white dark:bg-zinc-700",
        className
      )}
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 text-slate-500 dark:text-white">
        <h3 className={CM("tracking-tight text-sm font-semibold", titleClassName)}>{title}</h3>
        {icon ? <NhIcon icon={icon} className={CM("size-4", iconClassName)} /> : <span className="hidden">Icon</span>}
      </div>
      <div className="p-6 pt-0">
        <div className={CM("text-3xl font-bold text-zinc-900 dark:text-zinc-50", countClassName)}>{count}</div>
        <span className={CM("text-slate-400 dark:text-slate-300 text-xs", descriptionClassName)}>{description}</span>
      </div>
    </div>
  );
};

export { NhCard, NhCardCount };
