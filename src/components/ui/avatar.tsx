"use client";


import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const Avatar = forwardRef<
    ElementRef<typeof AvatarPrimitive.Root>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={twMerge(
            clsx(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl",
                className,
            ),
        )}
        {...props}
    />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<
    ElementRef<typeof AvatarPrimitive.Image>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={twMerge(clsx("aspect-square h-full w-full", className))}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
    ElementRef<typeof AvatarPrimitive.Fallback>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={twMerge(
            clsx(
                "flex h-full w-full items-center justify-center rounded-xl bg-muted",
                className,
            ),
        )}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
