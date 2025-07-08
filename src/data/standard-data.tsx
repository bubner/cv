import {
    Kennewell,
    Bubner,
    RoboRegistry,
    Serve,
    FusionChess,
    Bellower,
    Bunyips,
    Bezier,
    Tank,
    GitHub,
    LinkedIn,
    Globe,
    Unity,
    AIE,
    MBHS,
    BubnerReal,
    RightArrow,
    FIRST,
    Star,
    iAwards,
    Masons,
    PowerFM,
    Java,
    Kotlin,
    Python,
    CSharp,
    TypeScript,
    HTML,
    Jinja,
    LaTeX,
    Tag,
    Bars,
    Time,
    Trend,
    ReactJS,
    NextJS,
    Tailwind,
    Firebase,
    Vercel,
    Flask,
    Link,
    Lambda,
    EmptyStar,
    Tux,
    Git,
    Onshape,
    Logbook,
} from "@/images";
import ViewMore, { ViewMorePrint } from "../components/custom/view-more";
import ResumeData from "./data";

/**
 * Standard data.
 *
 * @author Lucas Bubner, 2025
 */
export const StandardData: ResumeData = {
    name: "Lucas Bubner",
    initials: "LB",
    pfp: Bubner,
    pfp_print: BubnerReal,
    wakatime: {
        name: "bubner",
        chart: "https://wakatime.com/share/@bubner/5e5091a6-e447-4c50-88f8-0c7c9205ef93.png",
    },
    location: "Greater Adelaide Area, South Australia, Australia",
    location_link:
        "https://www.google.com/maps/place/Adelaide+Metropolitan+Area,+SA/@-34.9816918,138.6440441,10z/data=!3m1!4b1!4m6!3m5!1s0x6ab0ced5a8ad9dcb:0x2ee6722d74deb41e!8m2!3d-34.9536465!4d138.598804!16s%2Fg%2F11c1tb7m8s?entry=ttu",
    about: "Software Developer | STEM Advocate",
    summary:
        "Highly <b>motivated</b> software developer and <b>STEM advocate</b>, <b>nationally recognised</b> at the 2023 <b>AIIA iAwards</b>. As <b>captain of a FIRST® robotics club</b>, I <b>lead</b> technical projects and <b>mentor</b> peers with a <b>clear vision</b>, <b>strong communication</b> skills, and a <b>commitment</b> to <b>collaboration</b>, <b>accountability</b>, and <b>resilience</b>, <b>promoting STEM in rural Australia</b>. <b>Passionate</b> about <b>robotics</b>, <b>web/game development</b>, and <b>software engineering</b>, I create <b>innovative</b> solutions to <b>real-world problems</b> while <b>continuously expanding</b> my technical expertise.",
    website: "https://bubner.me",
    contact: {
        email: "bubner@proton.me",
        tel: "",
        social: [
            {
                name: "Personal Website",
                url: "https://bubner.me",
                icon: Globe,
            },
            {
                name: "GitHub",
                url: "https://github.com/bubner",
                icon: GitHub,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/bubner",
                icon: LinkedIn,
            },
        ],
    },
    education: [
        {
            school: "Academy of Interactive Entertainment",
            degree: "ICT30120: Certificate III in Information Technology",
            start: "Jan 2024",
            end: "Dec 2024",
            logo: AIE,
        },
        {
            school: "Murray Bridge High School; Year 8 & 9 <b>Dux</b>; Year 10 & 11 GPA: <b>A+</b> (14.8/15.0, 14.9/15.0)",
            degree: "South Australian Certificate of Education (Expected)",
            start: "Jan 2021",
            end: "Dec 2025",
            logo: MBHS,
        },
    ],
    work: [
        {
            company: "Kennewell",
            link: "https://oldmatedesigns.com/",
            badges: ["Work Experience", "Onsite"],
            title: "Subsidiary Web Developer",
            logo: Kennewell,
            start: "Dec 2023",
            end: "Dec 2023",
            description:
                "<b>Enhanced</b> the frontend of a <b>Shopify</b> store, <b>improving user experience and sales.</b> Developed <b>Fusion 360 CAD animations</b> to showcase products.",
        },
    ],
    skills: [
        {
            header: "Skills & Achievements",
            info: [
                {
                    text: "FIRST® Robotics Leadership",
                    icon: FIRST,
                },
                {
                    text: "<b>4-year captain</b> of 15-member <b>FIRST® Tech Challenge robotics club</b>, <b>mentoring</b> teammates and <b>expanding</b> participation.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "Guided <b>five teams</b> (<b>two</b> in 2023, <b>three</b> in 2024) to the <b>National FTC Championship in Sydney</b>, achieving <b>high performance ranking 8th</b> at a <b>national level</b>.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "<b>Dean’s List Finalist</b> recognised for <b>leadership</b>, <b>advocacy</b> and <b>impact in STEM</b> across <b>FIRST® Australia</b>.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "STEM Advocacy & Community Engagement",
                    icon: Star,
                },
                {
                    text: "Presented <b>technical projects</b> to <b>iAwards</b> judges, <b>FIRST® robotics</b> panels, and <b>industry professionals</b>.",
                    icon: iAwards,
                    indented: true,
                },
                {
                    text: "Addressed <b>Rotary Club</b> (<b>$4,000</b> funding student travel) and <b>Masonic Charities</b> (<b>$20,000</b> for <b>regional robotics expansion</b>).",
                    icon: Masons,
                    indented: true,
                },
                {
                    text: "Published <b>STEM-focused</b> robotics articles via <b>social media</b>, <b>radio</b>, and <b>school events</b>.",
                    icon: PowerFM,
                    indented: true,
                },
            ],
        },
        {
            header: "Technical Capabilities",
            info: [
                {
                    text: "Programming Languages",
                    icon: Tag,
                },
                {
                    text: "Java",
                    icon: Java,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Kotlin",
                    icon: Kotlin,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Python",
                    icon: Python,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "C#",
                    icon: CSharp,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "TypeScript & JavaScript",
                    icon: TypeScript,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "HTML/CSS",
                    icon: HTML,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Jinja",
                    icon: Jinja,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "LaTeX",
                    icon: LaTeX,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Software Frameworks & Tools",
                    icon: EmptyStar,
                },
                {
                    text: "React",
                    icon: ReactJS,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Next.js",
                    icon: NextJS,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Tailwind",
                    icon: Tailwind,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Firebase",
                    icon: Firebase,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Vercel",
                    icon: Vercel,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Flask",
                    icon: Flask,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Unity",
                    icon: Unity,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Cloud & DevOps",
                    icon: Link,
                },
                {
                    text: "Linux",
                    icon: Tux,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Git",
                    icon: Git,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "GitHub",
                    icon: GitHub,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Event management systems (<b>RoboRegistry</b>)",
                    icon: RoboRegistry,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Robotics & Embedded Systems",
                    icon: Lambda,
                },
                {
                    text: "<b>FIRST®</b> Tech Challenge Robotics Club (<b>4 years</b>)",
                    icon: FIRST,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "<b>Open-source</b> robotics library (<b>BunyipsLib</b>)",
                    icon: Bunyips,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "<b>CAD</b> and hardware for <b>robotics automation</b>",
                    icon: Onshape,
                    indented: true,
                    grouped: true,
                },
            ],
        },
        {
            header: "Problem Solving & Innovation",
            custom_card_props: "print:mt-[95px]",
            info: [
                {
                    text: "Analytical Thinking & Troubleshooting",
                    icon: Bars,
                },
                {
                    text: "<b>Strong problem-solving skills</b> in software <b>debugging</b>, <b>robotics</b>, and system <b>optimisation</b>.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "Ability to <b>diagnose challenges</b> and implement <b>efficient</b>, <b>scalable solutions</b>.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "Adaptability & Continuous Learning",
                    icon: Trend,
                },
                {
                    text: "<b>Self-driven</b> learner, staying ahead in <b>emerging technologies</b> and <b>best practices</b>.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "<b>Quick to adapt</b> to <b>new challenges</b>, applying technical knowledge in <b>real-world scenarios</b>.",
                    icon: RightArrow,
                    indented: true,
                },
                {
                    text: "Conflict Resolution & Composure",
                    icon: Time,
                },
                {
                    text: "Maintains composure <b>under pressure</b>, effectively <b>resolving disputes</b> and ensuring <b>smooth collaboration</b> in <b>challenging</b> situations.",
                    icon: RightArrow,
                    indented: true,
                },
            ],
        },
        {
            header: "Personal Attributes",
            custom_card_props: "print:mt-[95px]",
            info: [
                {
                    text: "Innovative & Analytical Problem Solver",
                    icon: RightArrow,
                },
                {
                    text: "Develops <b>creative</b>, <b>effective</b> solutions to <b>complex</b> technical <b>challenges</b>, with <b>strong skills</b> in <b>refactoring</b>, <b>optimisation</b>, and <b>scalable system design</b>.",
                    indented: true,
                },
                {
                    text: "Self-Motivated & Adaptable Learner",
                    icon: RightArrow,
                },
                {
                    text: "<b>Dedicated</b> to <b>continuous skill development</b>, staying ahead in <b>emerging technologies</b>, and applying knowledge to <b>diverse real-world scenarios</b>.",
                    indented: true,
                },
                {
                    text: "Organised & Collaborative Leader",
                    icon: RightArrow,
                },
                {
                    text: "<b>Balances</b> academic excellence with <b>intensive</b> personal programming schedules, <b>mentors</b> teams, <b>drives STEM outreach</b>, and <b>fosters effective teamwork</b>.",
                    indented: true,
                },
            ],
        },
    ],
    pre_projects: <ViewMorePrint />,
    projects: [
        {
            title: "BunyipsLib",
            tech_stack: [
                "Java",
                "Kotlin",
                "Library",
                "Robotics",
                "Computer Vision",
            ],
            description:
                "A <b>free & open-source</b> powerful <b>FIRST® Tech Challenge</b> framework & library. <b>Solo-developed</b> 18,000+ lines of code with over <b>1000+ commits</b>.",
            link: {
                label: "BunyipsLib",
                href: "https://git.bubner.me/BunyipsLib",
            },
            logo: Bunyips,
        },
        {
            title: "Bunyip Bellower",
            tech_stack: [
                "Realtime Chat",
                "iAwards Winner",
                "React",
                "Firebase",
                "TypeScript",
            ],
            description:
                "Web chat application <b>designed for school-based social clubs</b>. Project <b>pitched to iAwards judges</b> to a <b>competing standard</b> with <b>several</b> national universities.",
            logo: Bellower,
        },
        {
            title: "Bunyip Logbook",
            tech_stack: [
                "Next.js",
                "Web Development",
                "Google APIs",
                "Automation",
            ],
            description:
                "An <b>automated</b> Google Workspace app for developing <b>engineering documentation</b> skills in <b>young innovators</b>. <b>Finalist</b> at the 2025 SA/NT <b>iAwards</b> for Student & Education.",
            logo: Logbook,
            // TODO: not released yet
            // link: {
            //     label: "Bunyip Logbook",
            //     href: "https://git.bubner.me/BunyipLogbook",
            // },
        },
        {
            title: "RoboRegistry",
            tech_stack: [
                "Robotics",
                "Web Development",
                "Python",
                "Firebase",
                "Flask",
            ],
            description:
                "An <b>automated registry</b> for recording FIRST® scrimmage attendance. Deployed at <b>Science Alive!</b> in 2023 by the <b>SA Student Robotics Club</b> (RoboRoos).",
            logo: RoboRegistry,
            link: {
                label: "RoboRegistry",
                href: "https://serve.bubner.me/roboregistry",
            },
        },
        {
            title: "Fusion Chess",
            tech_stack: ["Web Game", "React", "chess.js", "stockfish.js"],
            description:
                "A <b>custom chess variant</b> which involves fusing pieces. Culminated over <b>1900 search impressions and 260 clicks</b> through <b>Google Search</b>.",
            logo: FusionChess,
            link: {
                label: "Fusion Chess",
                href: "https://serve.bubner.me/fusionchess",
            },
        },
        {
            title: "Bezier",
            tech_stack: [
                "Unity",
                "Specialist Mathematics",
                "2D",
                "C#",
                "WebGL Build",
            ],
            description:
                "<b>Educational</b> Unity app to <b>visualise Bézier curves</b> construction. Designed in <b>Unity</b> as a <b>specialist mathematics</b> supplement.",
            logo: Bezier,
            link: {
                label: "Bezier",
                href: "https://serve.bubner.me/unity/bezier",
            },
        },
        {
            title: "Clusterbyte",
            tech_stack: [
                "Unity",
                "Game Development",
                "C#",
                "3D",
                "WebGL Build",
            ],
            description:
                "3D rouge-lite <b>tower defense game</b> with 5 levels, 4 weapons, and 5 enemies. Designed in <b>Unity</b> as an independent <b>AIE project</b>.",
            logo: Unity,
            link: {
                label: "Clusterbyte",
                href: "https://serve.bubner.me/unity/clusterbyte",
            },
        },
        {
            title: "bubner.me",
            tech_stack: [
                "Portfolio",
                "Personal Project",
                "TypeScript",
                "Next.js",
                "Vercel",
            ],
            description:
                "My <b>personal portfolio</b> website. <b>Self-managed</b> domain and webpages using <b>industry-standard</b> technologies and practices.",
            logo: Bubner,
            link: {
                label: "bubner.me",
                href: "https://bubner.me",
            },
        },
        // {
        //     title: "Tanks",
        //     tech_stack: [
        //         "Unity",
        //         "Game Development",
        //         "C#",
        //         "3D",
        //         "WebGL Build",
        //     ],
        //     description:
        //         "3D tank <b>game</b> in Unity with high scores, radar, and SFX. Designed in <b>Unity</b> as an independent <b>AIE project</b>.",
        //     logo: Tank,
        //     link: {
        //         label: "Tanks!",
        //         href: "https://serve.bubner.me/unity/tanks",
        //     },
        // },
        // {
        //     title: "Serve",
        //     tech_stack: ["Next.js", "Personal Project", "React", "Vercel"],
        //     description:
        //         "A <b>collection of web pages</b> for use in my <b>personal projects</b>. <b>Self-managed</b> for small projects and general link services.",
        //     logo: Serve,
        //     link: {
        //         label: "Serve",
        //         href: "https://serve.bubner.me",
        //     },
        // },
    ],
    post_projects: <ViewMore />,
};
