import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Genii — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/images/genii-logo.svg"
        alt="Genii"
        width={110}
        height={54}
        priority={priority}
        className="h-9 w-auto"
      />
    </Link>
  );
}
