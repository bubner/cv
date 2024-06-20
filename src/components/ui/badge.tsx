
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary/60 text-primary-foreground hover:bg-primary/100 p-[8px]",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    },
);

export interface BadgeProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div
            className={twMerge(clsx(badgeVariants({ variant }), className))}
            {...props}
        />
    );
}

export { Badge, badgeVariants };
