import { StaticImageData } from "next/image";
import Image from "next/image";

export default function ListItem({
    text,
    image,
    indented = false,
}: {
    text: string;
    image?: StaticImageData;
    indented?: boolean;
}) {
    return (
        <div className={`m-1 flex gap-2 ${indented ? "items-start" : "items-center"}`}>
            {image ? (
                <Image
                    alt=""
                    src={image}
                    className={`w-5${indented ? " ml-3" : ""}`}
                    draggable={false}
                />
            ) : (
                <div className={`min-w-5 min-h-[22px]${indented ? " ml-3" : ""}`} />
            )}
            <p
                className={`text-pretty text-[12px] text-muted-foreground${
                    !indented
                        ? " text-[13px] font-bold text-white print:text-black glow:text-glow/[.15]"
                        : ""
                }`}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
}
