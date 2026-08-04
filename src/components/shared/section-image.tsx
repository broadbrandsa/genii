import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Photographic section image — rounded, brand-glowed, cropped to a fixed
 * aspect so column heights stay predictable. Uses next/image so the large
 * source files are optimised and served responsively.
 */
export function SectionImage({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** Tailwind aspect-ratio class for the crop. */
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/60 genii-glow",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
