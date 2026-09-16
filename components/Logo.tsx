import Image from "next/image";
import { asset } from "@/lib/asset";
import { brand } from "@/lib/site";

type LogoProps = {
  className?: string;
  markSize?: number;
  priority?: boolean;
};

export function Logo({ className = "", markSize = 36, priority = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={asset("/brand-mark.png")}
        alt=""
        width={678}
        height={423}
        priority={priority}
        className="w-auto shrink-0"
        style={{ height: markSize }}
      />
      <span className="font-display text-[18px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[21px]">
        Uuu<span className="text-accent">Pay</span>Uuu
      </span>
      <span className="sr-only">{brand.name}</span>
    </span>
  );
}
