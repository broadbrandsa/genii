import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "gradient" | "outline" | "ghost" | "dark";
type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const variants: Record<Variant, string> = {
  gradient:
    "genii-gradient text-white shadow-lg shadow-genii-orange/25 hover:shadow-xl hover:shadow-genii-orange/35 hover:brightness-105",
  dark: "bg-genii-charcoal text-white hover:bg-genii-charcoal/90",
  outline:
    "border border-border bg-background text-foreground hover:border-genii-orange/60 hover:text-genii-red",
  ghost: "text-foreground hover:text-genii-red",
};

export interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
}

export function CtaButton({
  href,
  children,
  variant = "gradient",
  size = "md",
  showArrow = true,
  className,
}: CtaButtonProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-150 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-genii-orange/40",
    sizes[size],
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {content}
    </a>
  );
}
