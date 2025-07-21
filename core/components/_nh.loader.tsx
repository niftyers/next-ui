
import { LoaderIcon } from "lucide-react";

import { CM } from "@/utils";

interface INHLoader {
   isText?: boolean;
   className?: string;
   iconClassName?: string;
}

const NHLoader = ({ className, isText, iconClassName }: INHLoader) => {
   return (
      <div className={CM("absolute flex items-center justify-center w-full h-full", className)}>
         <div className="flex flex-col items-center ">
            <LoaderIcon className={CM("inline size-6 animate-spin", iconClassName)} />
            {isText && <div className="mt-2 text-xs">Please wait a moment</div>}
         </div>
      </div>
   );
};

export { NHLoader };