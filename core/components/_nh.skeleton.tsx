import { CM } from "@/utils";

interface INHSkeleton {
  cards?: number;
  className?: string;
  variant?: "text" | "list" | "card" | "single" | "block" | "avatar" | "article";
}

export const NHSkeleton = ({ className, cards = 1, variant = "text" }: INHSkeleton) =>
  Array.from({ length: cards }).map((_, card) => (
    <div key={`pr${card}`} className={CM("shadow rounded-sm w-full mx-auto", className)}>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4">
          {variant === "single" && (
            <div className="space-y-3">
              <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm w-full" />
            </div>
          )}
          {variant === "text" && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm col-span-2" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
            </div>
          )}
          {variant === "list" && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
              <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
            </div>
          )}
          {variant === "card" && (
            <div className="space-y-3">
              <div className="h-40 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm col-span-2" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
              <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
            </div>
          )}
          {variant === "block" && (
            <div className="space-y-0.5">
              <div className="h-24 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
            </div>
          )}
          {variant === "article" && (
            <div className="space-y-3">
              <div className="h-12 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm col-span-2" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm col-span-2" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
              <div className="h-6 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm col-span-2" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
            </div>
          )}
          {variant === "avatar" && (
            <div className="flex gap-3">
              <div className="bg-zinc-300 dark:bg-zinc-600 rounded-full size-12" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
                <div className="h-3 bg-zinc-300 dark:bg-zinc-600 rounded-sm" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ));
