import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo: any;
  className?: string;
}

export function ProjectCard({ title, description, tags, link, logo, className }: Props) {
  return (
    <Card className={"flex flex-col overflow-hidden border border-muted p-3" + className}>
      <CardHeader className="print:p-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Image className="w-8 rounded-md" alt={title} src={logo} />
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline glow:text-glow/[.15]"
                >
                  {title}{" "}
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                <span className="glow:text-glow/[.15]">{title}</span>
              )}
            </CardTitle>
          </div>
          <div className="hidden text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] glow glow:border-glow/[.5]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
