"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";

import "animate.css";
import Glow from "../components/custom/glow";
import { StandardData } from "@/data/standard-data";
import { usePathname } from "next/navigation";
import { LiteData } from "@/data/lite-data";
import { Bubner } from "@/images";
import ListItem from "@/components/custom/list-item";
import { Children, cloneElement, ReactElement, ReactNode } from "react";

const mapping = {
    "/": StandardData,
    "/lite": LiteData,
};

export default function Page() {
    const data = mapping[usePathname() as keyof typeof mapping] || StandardData;

    return (
        <div className="glow-capture">
            <main className="animate__animated animate__fadeIn animate__slower print:light dark container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
                <section className="glow mx-auto w-full max-w-3xl space-y-8 rounded-2xl bg-black p-8 glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow print:space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-1.5 print:space-y-0.5">
                            <h1 className="text-2xl font-bold text-white glow:text-glow/[.15] print:text-black">
                                {data.name}
                            </h1>
                            <p
                                className="max-w-md text-pretty text-sm text-muted-foreground"
                                dangerouslySetInnerHTML={{
                                    __html: data.about,
                                }}
                            />
                            <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                                <a
                                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                    href={data.location_link}
                                    target="_blank"
                                >
                                    <GlobeIcon className="size-3" />
                                    {data.location}
                                </a>
                            </p>
                            <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
                                {data.contact.email && (
                                    <Button
                                        className="size-8"
                                        variant="outline"
                                        size="icon"
                                        asChild
                                    >
                                        <a
                                            href={`mailto:${data.contact.email}`}
                                        >
                                            <MailIcon className="size-4 text-[#9CA3AF]" />
                                        </a>
                                    </Button>
                                )}
                                {data.contact.tel && (
                                    <Button
                                        className="size-8"
                                        variant="outline"
                                        size="icon"
                                        asChild
                                    >
                                        <a href={`tel:${data.contact.tel}`}>
                                            <PhoneIcon className="size-4" />
                                        </a>
                                    </Button>
                                )}
                                {data.contact.social.map((social) => (
                                    <Button
                                        key={social.name}
                                        className="size-8"
                                        variant="outline"
                                        size="icon"
                                        asChild
                                    >
                                        <a href={social.url}>
                                            {social.icon && (
                                                <Image
                                                    src={social.icon}
                                                    alt={social.name}
                                                    className="size-4"
                                                />
                                            )}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                            <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex">
                                <a href={data.website} target="_blank">
                                    <span className="underline">
                                        {data.website}
                                    </span>
                                </a>
                                {data.contact.email && (
                                    <a href={`mailto:${data.contact.email}`}>
                                        <span className="underline">
                                            {data.contact.email}
                                        </span>
                                    </a>
                                )}
                                {data.contact.tel && (
                                    <a href={`tel:${data.contact.tel}`}>
                                        <span className="underline">
                                            {data.contact.tel}
                                        </span>
                                    </a>
                                )}
                                <span className="text-[12px]">
                                    References available on request.
                                </span>
                            </div>
                        </div>
                        <a href={data.website} target="_blank">
                            {data.pfp_print && (
                                <Image
                                    className="relative hidden h-[7.5rem] w-[7.5rem] shrink-0 overflow-hidden rounded-[50%] border-2 print:flex"
                                    alt={data.name}
                                    src={data.pfp_print}
                                    width={100}
                                    height={100}
                                    priority
                                />
                            )}
                            {data.pfp && (
                                <Image
                                    className="h-30 w-30 animate__animated animate__fadeIn glow relative flex shrink-0 overflow-hidden rounded-[50%] border-2 hover:cursor-pointer glow:border-glow/[.33] print:hidden"
                                    alt={data.name}
                                    src={data.pfp}
                                    width={100}
                                    height={100}
                                    priority
                                />
                            )}
                        </a>
                    </div>
                    {data.wakatime && (
                        <Section className="print:hidden">
                            <a
                                target="_blank"
                                href={
                                    "https://wakatime.com/@" +
                                    data.wakatime.name
                                }
                                className="opacity-100 transition-all hover:opacity-50"
                            >
                                <Image
                                    alt="WakaTime activity"
                                    width={600}
                                    height={100}
                                    placeholder="blur"
                                    className="glow h-full w-full rounded-2xl border-2 border-black glow:border-glow"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    priority
                                    src={data.wakatime.chart}
                                />
                            </a>
                        </Section>
                    )}
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:text-black">
                            About
                        </h2>
                        <p
                            className="text-pretty text-sm text-muted-foreground"
                            dangerouslySetInnerHTML={{
                                __html: data.summary,
                            }}
                        />
                    </Section>
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:mb-1 print:text-black">
                            Education & Qualifications
                        </h2>
                        {data.education.map((education, i) => {
                            return (
                                <Card
                                    key={education.school}
                                    className="glow glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow"
                                >
                                    <CardHeader>
                                        <div className="flex flex-col justify-between gap-x-2 text-base print:flex-row md:flex-row">
                                            <h3 className="font-semibold leading-none glow:text-glow/[.15]">
                                                {education.degree}
                                            </h3>
                                            <div className="text-nowrap text-sm tabular-nums text-gray-500">
                                                {education.start}{" "}
                                                {education.end
                                                    ? `- ${education.end}`
                                                    : ""}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent
                                        className={`mt-1 print:mt-0 ${
                                            i == 0 ? "print:mb-2" : ""
                                        }`}
                                    >
                                        <div className="inline-flex items-center gap-2">
                                            {education.logo && (
                                                <Image
                                                    height={40}
                                                    width={40}
                                                    src={education.logo}
                                                    className="h-6 w-6"
                                                    alt={education.school}
                                                />
                                            )}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: education.school,
                                                }}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Section>
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:text-black">
                            Professional Experience & Skills
                        </h2>
                        {data.work.map((work) => {
                            return (
                                <Card
                                    key={work.company}
                                    className="glow glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow"
                                >
                                    <CardHeader>
                                        <div className="flex flex-col justify-between gap-x-2 text-base print:flex-row md:flex-row md:items-center">
                                            <h3 className="flex flex-col gap-1 font-semibold leading-none print:flex-row md:flex-row md:justify-center">
                                                <div className="inline-flex items-center">
                                                    {work.logo && (
                                                        <Image
                                                            height={40}
                                                            width={40}
                                                            src={work.logo}
                                                            className="mr-1 h-6 w-6"
                                                            alt={work.company}
                                                        />
                                                    )}
                                                    <a
                                                        className="hover:underline glow:text-glow/[.15]"
                                                        href={work.link}
                                                    >
                                                        {work.company}
                                                    </a>
                                                </div>
                                                <span className="flex flex-wrap gap-1">
                                                    {work.badges.map(
                                                        (badge) => (
                                                            <Badge
                                                                variant="secondary"
                                                                className="glow align-middle text-xs glow:border-glow/[.5]"
                                                                key={badge}
                                                            >
                                                                {badge}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </span>
                                            </h3>
                                            <div className="text-sm tabular-nums text-gray-500">
                                                {work.start}{" "}
                                                {work.end
                                                    ? `- ${work.end}`
                                                    : ""}
                                            </div>
                                        </div>
                                        <h4
                                            className="text-sm leading-none"
                                            dangerouslySetInnerHTML={{
                                                __html: work.title,
                                            }}
                                        />
                                    </CardHeader>
                                    <CardContent className="mt-2 text-xs">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: work.description,
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            );
                        })}
                        <div className="flex flex-wrap gap-3 text-white print:mt-2">
                            {data.skills.map((skill, i) => (
                                <Card
                                    className={`glow w-[calc(50%-0.5rem)] p-3 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow${
                                        skill.custom_card_props
                                            ? " " + skill.custom_card_props
                                            : ""
                                    }`}
                                    key={i}
                                >
                                    <h2
                                        className="mb-2 ml-1 text-lg font-bold glow:text-glow/[.15] print:ml-0 print:text-black"
                                        dangerouslySetInnerHTML={{
                                            __html: skill.header,
                                        }}
                                    />
                                    {skill.info.reduce((acc, item, idx) => {
                                        if (!item.grouped) {
                                            // Render directly
                                            acc.push(
                                                <ListItem
                                                    key={idx}
                                                    image={item.icon}
                                                    indented={item.indented}
                                                    text={item.text}
                                                />,
                                            );
                                        } else {
                                            // Check last accumulation to see if we're in a flex-wrap
                                            const lastElement =
                                                acc[acc.length - 1];
                                            if (
                                                !lastElement ||
                                                lastElement.type !== "div" ||
                                                !lastElement.props.className.includes(
                                                    "flex-wrap",
                                                )
                                            ) {
                                                // Use new flex-wrap
                                                acc.push(
                                                    <div
                                                        className="flex flex-wrap"
                                                        key={`group-${idx}`}
                                                    >
                                                        <ListItem
                                                            key={idx}
                                                            image={item.icon}
                                                            indented={
                                                                item.indented
                                                            }
                                                            text={item.text}
                                                        />
                                                    </div>,
                                                );
                                            } else {
                                                // Insert this element into the pre-existing flex-wrap
                                                const updatedChildren =
                                                    Children.toArray(
                                                        lastElement.props
                                                            .children,
                                                    );
                                                updatedChildren.push(
                                                    <ListItem
                                                        key={idx}
                                                        image={item.icon}
                                                        indented={item.indented}
                                                        text={item.text}
                                                    />,
                                                );
                                                acc[acc.length - 1] =
                                                    cloneElement(lastElement, {
                                                        children:
                                                            updatedChildren,
                                                    });
                                            }
                                        }
                                        return acc;
                                    }, [] as ReactElement[])}
                                </Card>
                            ))}
                        </div>
                    </Section>
                    <Section className="scroll-mb-16">
                        <h2 className="text-xl font-bold text-white print:text-black">
                            <span className="glow:text-glow/[.15]">
                                Key Projects
                            </span>
                        </h2>
                        {data?.pre_projects}
                        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                            {data.projects.map((project) => {
                                return (
                                    <ProjectCard
                                        className="glow glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow"
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tech_stack}
                                        logo={project.logo}
                                        link={
                                            project.link
                                                ? project.link.href
                                                : undefined
                                        }
                                    />
                                );
                            })}
                        </div>
                        {data?.post_projects}
                    </Section>
                </section>
            </main>
            <CommandMenu
                links={[
                    ...data.contact.social.map((socialMediaLink) => ({
                        url: socialMediaLink.url,
                        title: socialMediaLink.name,
                    })),
                ]}
            />
            <Glow />
        </div>
    );
}
