import { StandardData } from "@/data/standard-data";
import { AtBubner } from "@/images";
import Image from "next/image";

export default function ViewMore() {
    return (
        <a
            href={`https://github.com/bubner?tab=repositories`}
            target="_blank"
            className="inline-flex flex-row items-center justify-center gap-2 text-white glow:text-glow/[.15] print:hidden"
        >
            <span className="text-center text-sm text-muted-foreground">
                View more projects on GitHub:{" "}
            </span>
            <Image
                src={AtBubner}
                alt={`View more projects on ${StandardData.name}'s GitHub`}
                className="z-10 h-6 w-auto rounded"
            />
        </a>
    );
}

export function ViewMorePrint() {
    return (
        <div className="hidden print:block">
            View more projects:{" "}
            <span className="underline">
                https://github.com/bubner
            </span>
        </div>
    );
}
