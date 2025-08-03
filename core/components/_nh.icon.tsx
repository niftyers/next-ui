import * as LucideIcons from "lucide-react";

import { SvgIcons } from "@/icons";

type IconComponent = React.FC<{ size?: number; className?: string }>;

const isIconComponent = (value: any): value is IconComponent => {
  return typeof value === "function";
};

const filteredLucideIcons = Object.entries(LucideIcons).reduce(
  (acc, [key, val]) => {
    if (isIconComponent(val)) {
      acc[key] = val;
    }
    return acc;
  },
  {} as Record<string, IconComponent>
);

const filteredSvgIcons = SvgIcons as Record<string, IconComponent>;

const Icons: Record<string, IconComponent> = {
  ...filteredLucideIcons,
  ...filteredSvgIcons,
};

type TIcon = keyof typeof Icons;

interface INhIcon {
  icon?: TIcon;
  size?: number;
  className?: string;
}

const NhIcon = ({ icon, ...props }: INhIcon) => {
  if (!icon) return null;

  const IconRender = Icons[icon];
  if (!IconRender) return null;

  return <IconRender {...props} />;
};

export { NhIcon };
export type { TIcon };
