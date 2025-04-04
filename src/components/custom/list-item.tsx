import { StaticImageData } from "next/image";
import Image from "next/image";

export default function ListItem({
    children,
    image,
    tabbed = false,
}: {
    children: React.ReactNode;
    image?: StaticImageData;
    tabbed?: boolean;
}) {
    return (
        <div className="m-1 flex items-start gap-2">
            {image ? (
                <Image
                    alt=""
                    src={image}
                    className={`w-5${tabbed ? " ml-3" : ""}`}
                />
            ) : (
                <div className={`min-w-5${tabbed ? " ml-3" : ""}`} />
            )}
            <p className={`text-pretty text-[12px] text-muted-foreground${!tabbed ? " font-bold" : ""}`}>
                {children}
            </p>
        </div>
    );
}
