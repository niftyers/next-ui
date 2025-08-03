import { CM } from "@/utils";

const NhSkeletonLine = ({ className }: { className?: string }) => (
  <div className="shadow rounded-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className={CM("h-3 bg-zinc-300 dark:bg-zinc-700 rounded-sm w-full", className)}></div>
    </div>
  </div>
);

export { NhSkeletonLine };
