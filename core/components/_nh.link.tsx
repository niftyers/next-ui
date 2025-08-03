"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, memo, ReactNode } from "react";

import { IHtmlDiv, IHtmlLink } from "@/common";
import { CM } from "@/utils";

interface INhLink extends IHtmlDiv {
  path: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  onLinkClicked?: () => void;
}

const NhLink: FC<INhLink> = memo(({ path, children, iconStart, iconEnd, onLinkClicked, ...props }) => {
  const router = useRouter();
  const goto = async (path: string) => {
    if (onLinkClicked) {
      onLinkClicked();
    }
    router.push(path, { scroll: false });
  };
  return (
    <div aria-label={props.title} onClick={() => goto(path)} {...props} className="cursor-pointer">
      {iconStart && <span>{iconStart}</span>}
      {children}
      {iconEnd && <span>{iconEnd}</span>}
    </div>
  );
});

NhLink.displayName = "NhLink";

interface INhLinkMenu {
  caption: string;
  path: string;
  className?: string;
  onClick?: () => void;
  isExternal?: boolean;
}

const NhLinkMenu = ({ caption, path, onClick, className }: INhLinkMenu) => {
  const handeClick = () => {
    if (onClick) onClick();
  };
  return (
    <Link
      scroll={false}
      aria-label={caption}
      href={path}
      className={CM("w-full transition hover:cursor-pointer", className)}
      onClick={handeClick}
    >
      {caption}
    </Link>
  );
};

interface INhLinkExternal extends IHtmlLink {
  href: string;
}

const NhLinkExternal = ({ href, ...props }: INhLinkExternal) => (
  <a href={href} title={props.title} aria-label={props.title} target="_blank" rel="noopener noreferrer" {...props}>
    {props.children}
  </a>
);

interface INhLinkSocialIcon {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const NhLinkSocialIcon: React.FC<INhLinkSocialIcon> = ({ title, href, icon }) => (
  <a
    className={CM("group -m-1 p-1 flex justify-center items-center")}
    title={title}
    aria-label={title}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {icon}
  </a>
);

export { NhLink, NhLinkExternal, NhLinkMenu, NhLinkSocialIcon };
