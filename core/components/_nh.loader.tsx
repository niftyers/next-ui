import { CM } from "@/utils";

import { NhIcon } from "./_nh.icon";

interface INhSpinner {
  isText?: boolean;
  className?: string;
  iconClassName?: string;
}

const NhSpinner = ({ className, isText, iconClassName }: INhSpinner) => {
  return (
    <div className={CM("absolute flex items-center justify-center w-full h-full", className)}>
      <div className="flex flex-col items-center ">
        <NhIcon icon="LoaderIcon" className={CM("inline size-6 animate-spin", iconClassName)} />
        {isText && <div className="mt-2 text-xs">Please wait a moment</div>}
      </div>
    </div>
  );
};

const NhBusy = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-900 select-none">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-6 border-green-600 dark:border-green-500 border-t-transparent select-none"></div>
        <p className="animate-pulse text-lg font-medium text-gray-600 dark:text-gray-300 select-none">Loading...</p>
      </div>
    </div>
  );
};

export { NhBusy, NhSpinner };
