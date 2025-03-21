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
    GitHubG,
    LinkedIn,
    Globe,
    Unity,
    AIE,
    MBHS,
    Star,
    Bars,
    Code,
    Hat,
    BubnerReal,
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
    pfpPrint: BubnerReal,
    wakatime: {
        name: "bubner",
        chart: "https://wakatime.com/share/@bubner/5e5091a6-e447-4c50-88f8-0c7c9205ef93.png",
    },
    location: "Greater Adelaide Area, South Australia, Australia",
    locationLink:
        "https://www.google.com/maps/place/Adelaide+Metropolitan+Area,+SA/@-34.9816918,138.6440441,10z/data=!3m1!4b1!4m6!3m5!1s0x6ab0ced5a8ad9dcb:0x2ee6722d74deb41e!8m2!3d-34.9536465!4d138.598804!16s%2Fg%2F11c1tb7m8s?entry=ttu",
    about: "Software Developer | STEM Advocate",
    summary:
        "Highly motivated software developer and STEM advocate, nationally recognised at 2023 Australian Industry Information Association iAwards. As the captain of a FIRST® robotics club, I lead technical projects, mentor peers, and promote STEM engagement in rural Australia.<br><br>Passionate about robotics, web and game development, and software engineering, I create innovative software solutions to real-world problems while continuously expanding my technical experience. Strong analytical thinker, problem solver, and communicator with experience in project management and STEM advocacy.",
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
                icon: GitHubG,
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
                "Enhanced the frontend of a Shopify store, improving user experience and sales.<br>Developed Fusion 360 CAD animations to showcase products."
        },
    ],
    descriptive_skills: [
        {
            skill: "Leadership",
            icon: Star,
            description:
                "Serving as a 4-year captain of a 12-member FIRST® Tech Challenge Robotics club, leading as an advocate and enabler of STEM in rural Australia. Recognised by FIRST® as a Dean's List Finalist.",
        },
        {
            skill: "Problem Solving",
            icon: Hat,
            description:
                "Led the Bunyip Bellower project, a proof-of-concept initiative posed at student communication within school social clubs. Nationally recognised by the Australian Industry Association Industry.",
        },
        {
            skill: "Software Engineering",
            icon: Code,
            description:
                "Developed 25+ independent open-source projects. Proficient software developer in over 5 languages with a passion in several software fields, including web & game development, robotics, and low-level.",
        },
        {
            skill: "Organisation",
            icon: Bars,
            description:
                "Stays time organised by balancing high academic achievements while maintaining 4-hour daily programming schedule. Made 2466 GitHub commits in 2024 with 2400+ programming hours.",
        },
    ],
    skills: [
        "Java",
        "Robotics",
        "Kotlin",
        "Web Development",
        "React",
        "Next.js 14",
        "TypeScript",
        "Game Development",
        "Unity",
        "C#",
        "Tailwind",
        "Python",
        "Flask",
        "LaTeX",
        "Linux",
        "Vercel",
        "Firebase",
        "CAD",
    ],
    pre_projects: <ViewMorePrint />,
    projects: [
        {
            title: "BunyipsLib",
            techStack: [
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
            techStack: [
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
            techStack: [
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
            techStack: [
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
            techStack: ["Web Game", "React", "chess.js", "stockfish.js"],
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
            techStack: ["Unity", "Game Development", "C#", "3D", "WebGL Build"],
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
            techStack: ["Unity", "Game Development", "C#", "3D", "WebGL Build"],
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
            techStack: [
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
            techStack: ["Next.js", "Personal Project", "React", "Vercel"],
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
