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
        <div className="m-1 flex items-start gap-2">
            {image ? (
                <Image
                    alt=""
                    src={image}
                    className={`w-5 h-5${indented ? " ml-3" : ""}`}
                />
            ) : (
                <div className={`min-w-6 min-h-5${indented ? " ml-3" : ""}`} />
            )}
            <p
                className={`text-pretty text-[12px] text-muted-foreground${
                    !indented
                        ? " text-[13px] font-bold text-white glow:text-glow/[.15]"
                        : ""
                }`}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
}
