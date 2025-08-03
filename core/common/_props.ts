import { HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface IHtmlButton extends HTMLAttributes<HTMLButtonElement> {}
interface IHtmlDiv extends HTMLAttributes<HTMLDivElement> {}
interface IHtmlIFrame extends HTMLAttributes<HTMLIFrameElement> {}
interface IHtmlInput extends InputHTMLAttributes<HTMLInputElement> {}
interface IHtmlLink extends HTMLAttributes<HTMLAnchorElement> {}
interface IHtmlTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
interface IHtmlSvg extends HTMLAttributes<HTMLOrSVGElement> {}

export type { IHtmlButton, IHtmlDiv, IHtmlIFrame, IHtmlInput, IHtmlLink, IHtmlTextArea, IHtmlSvg };
