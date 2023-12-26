import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const ButtonVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-accent hover:bg-accent-hover text-accent-foreground flex min-h-max items-center gap-x-2 rounded px-6 py-3 font-semibold transition",
      ghost:
        "text-accent before:bg-accent relative flex min-h-max items-center gap-x-2 overflow-hidden pb-2 font-semibold transition before:absolute before:bottom-0 before:right-[1px] before:h-[1px] before:w-full before:-translate-x-full before:transition-transform before:duration-300 hover:before:-translate-x-0",
      primary:
        "bg-accent hover:bg-accent-hover text-accent-foreground flex min-h-max items-center gap-x-2 rounded px-6 py-3 font-semibold transition",
    },
  },
})

type ButtonProps = {
  as: "button" | "anchor"
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
) &
  VariantProps<typeof ButtonVariants>

export const Button = ({
  children,
  variant,
  as,
  className = "",
  ...props
}: ButtonProps) => {
  if (as === "anchor") {
    const { href, ...linkProps } =
      props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

    return (
      <Link
        href={href}
        className={cn("", ButtonVariants({ variant }), className)}
        {...linkProps}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <button
        className={cn("", ButtonVariants({ variant }), className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }
}
