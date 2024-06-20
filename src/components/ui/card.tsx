

import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Card = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={twMerge(
            clsx(
                "rounded-lg bg-card p-4 text-card-foreground print:p-0",
                className,
            ),
        )}
        {...props}
    />
));
Card.displayName = "Card";

const CardHeader = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={twMerge(clsx("flex flex-col space-y-1.5", className))}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={twMerge(
            clsx(
                "text-2xl font-semibold leading-none tracking-tight",
                className,
            ),
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={twMerge(clsx("text-sm text-muted-foreground", className))}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={twMerge(
            clsx("text-pretty text-sm text-muted-foreground", className),
        )}
        {...props}
    />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={twMerge(clsx("flex items-center", className))}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
