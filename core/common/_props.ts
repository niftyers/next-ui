import { HTMLAttributes } from "react";

interface IHtmlButton extends HTMLAttributes<HTMLButtonElement> {}
interface IHtmlDiv extends HTMLAttributes<HTMLDivElement> {}
interface IHtmlIFrame extends HTMLAttributes<HTMLIFrameElement> {}
interface IHtmlLink extends HTMLAttributes<HTMLAnchorElement> {}
interface IHtmlSvg extends HTMLAttributes<HTMLOrSVGElement> {}

export type { IHtmlButton, IHtmlDiv, IHtmlIFrame, IHtmlLink, IHtmlSvg };
