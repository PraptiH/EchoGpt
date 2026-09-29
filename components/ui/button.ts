import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,scale] duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] active:transition-none disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-sm hover:bg-primary/90 hover:shadow-md",
        outline: "border border-line bg-card text-ink shadow-sm hover:bg-surface",
        ghost: "text-ink hover:bg-zinc-300 dark:hover:bg-surface",
        inverse: "bg-white text-primary shadow-sm hover:bg-white/90 hover:shadow-md",
        glass: "border border-white/30 bg-white/10 text-white hover:bg-white/20",
        icon: "text-ink hover:bg-surface",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-sm",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
