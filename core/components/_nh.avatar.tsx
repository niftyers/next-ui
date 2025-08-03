import Image from "next/image";

interface INhAvatar {
  alt: string;
  url: string;
  width?: number;
  height?: number;
  className?: string;
}

const NhAvatar = ({ alt, url, width, height, className }: INhAvatar) => (
  <Image
    src={`${url}`}
    alt={alt}
    width={width ?? 128}
    height={height ?? 128}
    decoding="async"
    data-nimg="1"
    className={["object-cover hover:cursor-pointer", className].join(" ")}
    sizes="8rem"
  />
);

export { NhAvatar };
