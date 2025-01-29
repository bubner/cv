import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";

import "animate.css";
import Glow from "../components/glow";
import { GitHubW } from "@/images";

export const metadata: Metadata = {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    icons: ["./favicon.ico"],
};

export default function Page() {
    return (
        <div className="glow-capture">
            <main className="animate__animated animate__fadeIn animate__slower print:light dark container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
                <section className="glow mx-auto w-full max-w-3xl space-y-8 rounded-2xl bg-black p-8 glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow print:space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-1.5">
                            <h1 className="text-2xl font-bold text-white glow:text-glow/[.15] print:text-black">
                                {RESUME_DATA.name}
                            </h1>
                            <p className="max-w-md text-pretty text-sm text-muted-foreground">
                                {RESUME_DATA.about}
                            </p>
                            <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                                <a
                                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                    href={RESUME_DATA.locationLink}
                                    target="_blank"
                                >
                                    <GlobeIcon className="size-3" />
                                    {RESUME_DATA.location}
                                </a>
                            </p>
                            <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
                                {RESUME_DATA.contact.email ? (
                                    <Button
                                        className="size-8"
                                        variant="outline"
                                        size="icon"
                                        asChild
                                    >
                                        <a
                                            href={`mailto:${RESUME_DATA.contact.email}`}
                                        >
                                            <MailIcon className="size-4 text-[#9CA3AF]" />
                                        </a>
                                    </Button>
                                ) : null}
                                {RESUME_DATA.contact.tel ? (
                                    <Button
                                        className="size-8"
                                        variant="outline"
                                        size="icon"
                                        asChild
                                    >
                                        <a
                                            href={`tel:${RESUME_DATA.contact.tel}`}
                                        >
                                            <PhoneIcon className="size-4" />
                                        </a>
                                    </Button>
                                ) : null}
                                {RESUME_DATA.contact.social.map((social) => (
                                    <Button
                                        key={social.name}
                                        className="size-8"
                                        variant="outline"
                                        size="icon"
                                        asChild
                                    >
                                        <a href={social.url}>
                                            <Image
                                                src={social.icon}
                                                alt={social.name}
                                                className="size-4"
                                            />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                            <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex">
                                <a href={RESUME_DATA.website} target="_blank">
                                    <span className="underline">
                                        {RESUME_DATA.website}
                                    </span>
                                </a>
                                {RESUME_DATA.contact.email ? (
                                    <a
                                        href={`mailto:${RESUME_DATA.contact.email}`}
                                    >
                                        <span className="underline">
                                            {RESUME_DATA.contact.email}
                                        </span>
                                    </a>
                                ) : null}
                                {RESUME_DATA.contact.tel ? (
                                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                                        <span className="underline">
                                            {RESUME_DATA.contact.tel}
                                        </span>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                        <a href={RESUME_DATA.website} target="_blank">
                            <Image
                                className="h-30 w-30 animate__animated animate__fadeIn glow relative flex shrink-0 overflow-hidden rounded-[50%] border-2 hover:cursor-pointer glow:border-glow/[.33]"
                                alt={RESUME_DATA.name}
                                src={RESUME_DATA.pfp}
                                width={100}
                                height={100}
                                priority
                            />
                        </a>
                    </div>
                    <Section className="print:hidden">
                        <a
                            target="_blank"
                            href={
                                "https://wakatime.com/@" +
                                RESUME_DATA.wakatimeName
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
                                src={RESUME_DATA.wakatimeChart}
                            />
                        </a>
                    </Section>
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:text-black">
                            About
                        </h2>
                        <p
                            className="text-pretty text-sm text-muted-foreground"
                            dangerouslySetInnerHTML={{
                                __html: RESUME_DATA.summary,
                            }}
                        />
                    </Section>
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:text-black">
                            Qualifications
                        </h2>
                        {RESUME_DATA.education.map((education) => {
                            return (
                                <Card
                                    key={education.school}
                                    className="glow glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow"
                                >
                                    <CardHeader>
                                        <div className="flex flex-col justify-between gap-x-2 text-base md:flex-row">
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
                                    <CardContent className="mt-1">
                                        {education.school}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Section>
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:text-black">
                            Work Experience
                        </h2>
                        {RESUME_DATA.work.map((work) => {
                            return (
                                <Card
                                    key={work.company}
                                    className="glow glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow"
                                >
                                    <CardHeader>
                                        <div className="flex flex-col justify-between gap-x-2 text-base md:flex-row md:items-center">
                                            <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none md:justify-center">
                                                <Image
                                                    height={40}
                                                    width={40}
                                                    src={work.logo}
                                                    className="h-6 w-6"
                                                    alt={work.company}
                                                />
                                                <a
                                                    className="hover:underline glow:text-glow/[.15]"
                                                    href={work.link}
                                                >
                                                    {work.company}
                                                </a>
                                                <span className="flex gap-x-1">
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
                                        <h4 className="text-sm leading-none">
                                            {work.title}
                                        </h4>
                                    </CardHeader>
                                    <CardContent className="mt-2 text-xs">
                                        {work.description}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Section>
                    <Section>
                        <h2 className="text-xl font-bold text-white glow:text-glow/[.15] print:text-black">
                            Skills
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 border p-4">
                                Placeholder 1
                            </div>
                            <div className="w-1/2 border p-4">
                                Placeholder 2
                            </div>
                            <div className="w-1/2 border p-4">
                                Placeholder 3
                            </div>
                            <div className="w-1/2 border p-4">
                                Placeholder 4
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {RESUME_DATA.skills.map((skill) => {
                                return (
                                    <Badge
                                        className="glow glow:ring-1 glow:ring-glow"
                                        key={skill}
                                    >
                                        {skill}
                                    </Badge>
                                );
                            })}
                        </div>
                    </Section>
                    <Section className="print-force-new-page scroll-mb-16">
                        <h2 className="text-xl font-bold text-white print:text-black">
                            <span className="glow:text-glow/[.15]">
                                Projects
                            </span>
                            &nbsp;
                            <Button
                                className="size-8 print:hidden"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a
                                    href={`https://github.com/${RESUME_DATA.githubName}?tab=repositories`}
                                    target="_blank"
                                >
                                    <Image
                                        src={GitHubW}
                                        alt="GitHub"
                                        className="z-10 size-4"
                                    />
                                </a>
                            </Button>
                        </h2>
                        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                            {RESUME_DATA.projects.map((project) => {
                                return (
                                    <ProjectCard
                                        className="glow glow:border-glow glow:bg-glow/[.25] glow:ring-1 glow:ring-glow"
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        tags={project.techStack}
                                        logo={project.logo}
                                        link={
                                            "link" in project
                                                ? project.link.href
                                                : undefined
                                        }
                                    />
                                );
                            })}
                        </div>
                    </Section>
                </section>
            </main>
            <CommandMenu
                links={[
                    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                        url: socialMediaLink.url,
                        title: socialMediaLink.name,
                    })),
                ]}
            />
            <Glow />
        </div>
    );
}
