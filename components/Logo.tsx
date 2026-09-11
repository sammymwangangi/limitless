import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 28 }: LogoProps) {
  return (
    <Image
      src="/brand/limitless-icon.webp"
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      priority={size >= 28}
    />
  );
}
