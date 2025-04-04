import { StaticImageData } from "next/image";
import Image from "next/image";

export default function ListItem({
    children,
    image,
    indented = false,
}: {
    children: React.ReactNode;
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
            <p className={`text-pretty text-[12px] text-muted-foreground${!indented ? " font-bold text-[13px] glow:text-glow/[.15] text-white" : ""}`}>
                {children}
            </p>
        </div>
    );
}
