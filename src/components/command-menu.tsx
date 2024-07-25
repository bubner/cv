"use client";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <p className="animate__animated animate__fadeInUp pointer-events-none fixed bottom-0 left-0 right-0 z-30 hidden border-t border-t-gray-800 bg-black p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
                Press{" "}
                <kbd
                    className="pointer-events-auto z-40 inline-flex h-5 select-none items-center gap-1 rounded border border-gray-800 bg-gray-800 px-1.5 text-[10px] font-medium text-muted-foreground opacity-100 hover:cursor-pointer"
                    onClick={() => setOpen((o) => !o)}
                >
                    <span className="text-xs">Ctrl K</span>
                </kbd>{" "}
                to open the command menu
            </p>
            <Button
                onClick={() => setOpen((open) => !open)}
                variant="outline"
                size="icon"
                className="animate__animated animate__fadeInRight fixed bottom-4 right-4 z-50 flex rounded-full border-gray-700 bg-gray-800 shadow-2xl hover:bg-gray-600 print:hidden xl:hidden"
            >
                <CommandIcon className="my-6 size-6 text-gray-300" />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Actions">
                        <CommandItem
                            onSelect={() => {
                                setOpen(false);
                                window.print();
                            }}
                        >
                            <span>Print</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Links">
                        {links.map(({ url, title }) => (
                            <CommandItem
                                key={url}
                                onSelect={() => {
                                    setOpen(false);
                                    window.open(url, "_blank");
                                }}
                            >
                                <span>{title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </CommandDialog>
        </>
    );
};
