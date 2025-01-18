import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "font-semibold font-code text-xs uppercase tracking-wider inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        white:
          "button text-primary-foreground bg-white shadow-sm hover:bg-white/80 transition-colors hover:text-artdevium-amethyst",
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        yellow:
          "px-8 py-3.5 bg-yellow-300 rounded-full justify-center items-center gap-2.5 inline-flex text-stone-900 text-base font-medium capitalize hover:bg-yellow-400 hover:text-stone-900"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9"
      },
      rounded: {
        default: "rounded-md",
        none: "rounded-none",
        tr: "rounded-tr-[24px]",
        tl: "rounded-tl-[24px]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, rounded, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
