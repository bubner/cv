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
} from "@/images";
import ViewMore, { ViewMorePrint } from "../components/custom/view-more";
import ResumeData from "./data";

/**
 * Standard data.
 *
 * @author Lucas Bubner, 2025
 */
// TODO: add <b> bold on keywords
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
        "Highly motivated software developer and STEM advocate, nationally recognised at the 2023 Australian Industry Information Association iAwards. As captain of a FIRST® robotics club, I lead technical projects and mentor peers with a clear vision, strong communication skills, and a commitment to collaboration, accountability, and resilience, promoting STEM in rural Australia. Passionate about robotics, web/game development, and software engineering, I create innovative solutions to real-world problems while continuously expanding my technical expertise.",
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
            school: "Murray Bridge High School; Year 8 & 9 Dux; Year 10 & 11 GPA: A+ (14.8/15.0, 14.9/15.0)",
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
                "Enhanced the frontend of a Shopify store, improving user experience and sales. Developed Fusion 360 CAD animations to showcase products.",
        },
    ],
    skills: [
        // TODO: allocate actual images
        {
            header: "Skills & Achievements",
            info: [
                {
                    text: "FIRST® Robotics Leadership",
                    icon: undefined,
                },
                {
                    text: "4-year captain of 15-member FIRST® Tech Challenge robotics club, mentoring teammates and expanding participation.",
                    icon: undefined,
                    indented: true,
                },
                {
                    text: "Guided five teams (two in 2023, three in 2024) to the National FTC Competition in Sydney, achieving high performance ranking 8th at Nationals qualification.",
                    icon: undefined,
                    indented: true,
                },
                {
                    text: "Dean’s List Finalist recognised for leadership, advocacy and impact in STEM across FIRST® Australia.",
                    icon: undefined,
                    indented: true,
                },
                {
                    text: "STEM Advocacy & Community Engagement",
                    icon: undefined,
                },
                {
                    text: "Presented technical projects to iAwards judges, FIRST® robotics panels, and industry professionals.",
                    icon: undefined,
                    indented: true,
                },
                {
                    text: "Addressed Rotary Club ($4,000 funding student travel) and Masonic Charities ($20,000 for regional robotics expansion).",
                    icon: undefined,
                    indented: true,
                },
                {
                    text: "Published STEM-focused articles on robotics through social media, radio interviews, and school.",
                    icon: undefined,
                    indented: true,
                },
            ],
        },
        {
            header: "Technical Capabilities",
            info: [
                {
                    text: "Programming Languages",
                    icon: undefined,
                },
                {
                    text: "Java",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Kotlin",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Python",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "C#",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "TypeScript & JavaScript",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "HTML/CSS",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Jinja",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "LaTeX",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Software Frameworks & Tools",
                    icon: undefined,
                },
                {
                    text: "React",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Next.js",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Tailwind CSS",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Firebase",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Vercel",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Flask",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Unity",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Cloud & DevOps",
                    icon: undefined,
                },
                {
                    text: "Linux",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Git",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "GitHub",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Event management systems (RoboRegistry)",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Robotics & Embedded Systems",
                    icon: undefined,
                },
                {
                    text: "FIRST® Tech Challenge Robotics Club (4 years)",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "Open-source robotics library (BunyipsLib)",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
                {
                    text: "CAD and hardware for robotics automation",
                    icon: undefined,
                    indented: true,
                    grouped: true,
                },
            ],
        },
        {
            header: "Problem Solving & Innovation",
            custom_card_props: "print:mt-[90px]",
            info: [
                {
                    text: "Analytical Thinking & Troubleshooting",
                    icon: undefined,
                },
                {
                    text: "Strong problem-solving skills in software debugging, robotics, and system optimisation.",
                    indented: true,
                },
                {
                    text: "Ability to diagnose challenges and implement efficient, scalable solutions.",
                    indented: true,
                },
                {
                    text: "Adaptability & Continuous Learning",
                    icon: undefined,
                },
                {
                    text: "Self-driven learner, staying ahead in emerging technologies and best practices.",
                    indented: true,
                },
                {
                    text: "Quick to adapt to new challenges, applying technical knowledge in real-world scenarios.",
                    indented: true,
                },
                {
                    text: "Conflict Resolution & Composure",
                    icon: undefined,
                },
                {
                    text: "Maintains composure under pressure, effectively resolving disputes and ensuring smooth collaboration in challenging situations.",
                    indented: true,
                },
            ],
        },
        {
            header: "Personal Attributes",
            custom_card_props: "print:mt-[90px]",
            info: [
                {
                    text: "Innovative & Analytical Problem Solver",
                    icon: undefined,
                },
                {
                    text: "Develops creative, effective solutions to complex technical challenges, with strong skills in debugging, optimisation, and scalable system design.",
                    indented: true,
                },
                {
                    text: "Self-Motivated & Adaptable Learner",
                    icon: undefined,
                },
                {
                    text: "Dedicated to continuous skill development, staying ahead in emerging technologies, and applying knowledge to diverse real-world scenarios.",
                    indented: true,
                },
                {
                    text: "Organised & Collaborative Leader",
                    icon: undefined,
                },
                {
                    text: "Balances academic excellence with intensive programming schedules, mentors teams, drives STEM outreach, and fosters effective teamwork.",
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
                "A free & open-source powerful FIRST® Tech Challenge utility library. Solo-developed 17,000+ lines of code with over 1000+ commits.",
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
                "Web chat application designed for school-based social clubs. Project pitched to iAwards judges to a competing standard with several national universities.",
            logo: Bellower,
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
                "An automated registry for recording FIRST scrimmage attendance. Deployed and used at Science Alive in 2023 by the SA Student Robotics Club (RoboRoos).",
            logo: RoboRegistry,
            link: {
                label: "RoboRegistry",
                href: "https://serve.bubner.me/roboregistry",
            },
        },
        {
            title: "bubner.me",
            tech_stack: [
                "Portfolio",
                "Personal Project",
                "TypeScript",
                "React",
                "Vercel",
            ],
            description:
                "My personal portfolio website. Self-managed domain using industry-standard technologies and practices.",
            logo: Bubner,
            link: {
                label: "bubner.me",
                href: "https://bubner.me",
            },
        },
        {
            title: "Fusion Chess",
            tech_stack: ["Web Game", "React", "chess.js", "stockfish.js"],
            description:
                "A custom chess variant which involves fusing pieces. Culminated over 1200 search impressions and 190 clicks through Google Search.",
            logo: FusionChess,
            link: {
                label: "Fusion Chess",
                href: "https://serve.bubner.me/fusionchess",
            },
        },
        {
            title: "Clusterbyte",
            tech_stack: ["Unity", "Game Development", "C#", "3D", "WebGL Build"],
            description:
                "3D rouge-lite tower defense game with 5 levels, 4 weapons, and 5 enemies. Designed in Unity as an independent AIE project.",
            logo: Unity,
            link: {
                label: "Clusterbyte",
                href: "https://serve.bubner.me/unity/clusterbyte",
            },
        },
        {
            title: "Tanks",
            tech_stack: ["Unity", "Game Development", "C#", "3D", "WebGL Build"],
            description:
                "3D tank game in Unity with high scores, radar, and SFX. Designed in Unity as an independent AIE project.",
            logo: Tank,
            link: {
                label: "Tanks!",
                href: "https://serve.bubner.me/unity/tanks",
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
                "Educational Unity app to visualise Bézier curve construction. Designed in Unity as a specialist mathematics supplement.",
            logo: Bezier,
            link: {
                label: "Bezier",
                href: "https://serve.bubner.me/unity/bezier",
            },
        },
        {
            title: "Serve",
            tech_stack: ["Next.js", "Personal Project", "React", "Vercel"],
            description:
                "A collection of web pages for use in my personal projects. Self-managed for small projects and general link services.",
            logo: Serve,
            link: {
                label: "Serve",
                href: "https://serve.bubner.me",
            },
        },
    ],
    post_projects: <ViewMore />,
};
