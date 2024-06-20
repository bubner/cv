import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
    return (
        <section
            className={twMerge(
                clsx("flex min-h-0 flex-col gap-y-3", className),
            )}
            {...props}
        />
    );
}
