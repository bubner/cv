import {
    Kennewell,
    Bubner,
    RoboRegistry,
    Serve,
    DosGames,
    FusionChess,
    Mind,
    Bellower,
    Bunyips,
    ThreeDots,
    MP3,
    Mine,
    Cookie,
    Calc,
    TTT,
    Bezier,
    Tank,
    Mc,
    GitHubG,
    LinkedIn,
    Globe,
} from "@/images";

/**
 * Data.
 *
 * @author Lucas Bubner, 2024
 */
export const RESUME_DATA = {
    name: "Lucas Bubner",
    initials: "LB",
    pfp: Bubner,
    wakatimeName: "bubner",
    wakatimeChart:
        "https://wakatime.com/share/@bubner/5e5091a6-e447-4c50-88f8-0c7c9205ef93.png",
    githubName: "bubner",
    location: "Greater Adelaide Area, South Australia, Australia",
    locationLink:
        "https://www.google.com/maps/place/Adelaide+Metropolitan+Area,+SA/@-34.9816918,138.6440441,10z/data=!3m1!4b1!4m6!3m5!1s0x6ab0ced5a8ad9dcb:0x2ee6722d74deb41e!8m2!3d-34.9536465!4d138.598804!16s%2Fg%2F11c1tb7m8s?entry=ttu",
    about: "A young self-driven academic student and software developer.",
    summary:
        "Distinguished at a national level at the 2023 AIIA iAwards, I am a software developer that takes strides into the unknown for personal growth and professional improvement. Passioniate in the fields of robotics, web development, Unity game development, and engineering, I develop software solutions to tackle real-world problems, advocating and promoting technical skills used in the workforce.",
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
            school: "Highbury Primary School",
            degree: "Primary School Education",
            start: "2012",
            end: "2020",
        },
        {
            school: "Murray Bridge High School",
            degree: "South Australian Certificate of Education (SACE), Multi-year Dux",
            start: "2021",
            end: "2025",
        },
        {
            school: "EdX - Harvard Online",
            degree: "CS50's Introduction to Computer Science Certificate",
            start: "2022",
            end: null,
        },
    ],
    work: [
        {
            company: "Kennewell",
            link: "https://oldmatedesigns.com/",
            badges: ["Experience", "Onsite"],
            title: "Subsidiary Web Developer",
            logo: Kennewell,
            start: "2023",
            end: null,
            description:
                "Worked on backend and frontend implementations of a subsidiary Shopify store through upgrades with improved images, graphics, visual user experience, and Fusion360 CAD animations to boost sales. Performed as Student Work Experience as part of Murray Bridge High School.",
        },
    ],
    skills: [
        "Java",
        "Object-Oriented Programming",
        "React",
        "Next.js",
        "TypeScript",
        "Robotics",
        "Unity",
        "C#",
        "Web Development",
        "Python",
        "Linux",
        "Photoshop",
    ],
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
                "A free & open-source powerful FIRST Tech Challenge utility library",
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
                "Web chat application designed for school-based social clubs",
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
                "An automated registry for recording FIRST scrimmage attendance",
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
            description: "My personal portfolio website",
            logo: Bubner,
            link: {
                label: "bubner.me",
                href: "https://bubner.me",
            },
        },
        {
            title: "Fusion Chess",
            techStack: ["Web Game", "React", "chess.js", "stockfish.js"],
            description: "A custom chess variant which involves fusing pieces",
            logo: FusionChess,
            link: {
                label: "Fusion Chess",
                href: "https://serve.bubner.me/fusionchess",
            },
        },
        {
            title: "Tanks",
            techStack: ["Unity", "Game Development", "C#", "3D", "WebGL Build"],
            description:
                "3D tank game in Unity with high scores, radar, and SFX",
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
                "Educational Unity app to visualise Bézier curve construction",
            logo: Bezier,
            link: {
                label: "Bezier",
                href: "https://serve.bubner.me/unity/bezier",
            },
        },

        {
            title: "mp3yt",
            techStack: ["Flask", "Web App", "Python", "yt-dlp", "ffmpeg"],
            description:
                "yt-dlp wrapper for downloading YouTube videos through a simple web app",
            logo: MP3,
            // link: {
            //     label: "mp3yt",
            //     href: "https://github.com/bubner/mp3yt",
            // },
        },
        {
            title: "MinesweeperAI",
            techStack: ["Python", "AI", "Pygame", "Proof of Concept"],
            description:
                "Minesweeper game implemented in Pygame with an AI search algorithm",
            logo: Mine,
            // link: {
            //     label: "MinesweeperAI",
            //     href: "https://github.com/bubner/MinesweeperAI",
            // },
        },
        {
            title: "Serve",
            techStack: ["Next.js", "Personal Project", "React", "Vercel"],
            description:
                "A collection of web pages for use in my personal projects",
            logo: Serve,
            link: {
                label: "Serve",
                href: "https://serve.bubner.me",
            },
        },

        {
            title: "Cookie Clicker",
            techStack: ["Arduino", "C++", "LCD", "Proof of Concept"],
            description:
                "Simple cookie clicker game for an Arduino with a 16x2 LCD screen",
            logo: Cookie,
            // link: {
            //     label: "Cookie Clicker",
            //     href: "https://github.com/bubner/Arduino-CookieClicker",
            // },
        },
        {
            title: "Calculator",
            techStack: ["Python", "Tkinter", "Math", "Proof of Concept"],
            description: "Scientific/graphing/trig. calculator in Tkinter",
            logo: Calc,
            // link: {
            //     label: "TkinterCalculator",
            //     href: "https://github.com/bubner/TkinterCalculator",
            // },
        },

        {
            title: "UltimateTTT",
            techStack: ["Python", "CLI", "Minimax", "AI", "Proof of Concept"],
            description:
                "0-2 player CLI Ultimate Tic-Tac-Toe with a concept AI",
            logo: TTT,
            // link: {
            //     label: "UltimateTicTacToe",
            //     href: "https://github.com/bubner/UltimateTicTacToe/"
            // }
        },
        {
            title: "Minecraft Forge",
            techStack: ["Java", "Minecraft", "Modding", "Mini Projects"],
            description:
                "Various quality-of-life Forge mods for Hypixel SkyBlock Minecraft 1.8.9",
            logo: Mc,
        },

        {
            title: "Mind",
            techStack: ["Python", "Flask", "JavaScript", "Web Game"],
            description: "GUI-based autosave adventure web game",
            logo: Mind,
        },
        {
            title: "DosGames",
            techStack: ["HTML", "Emulation", "js-dos"],
            description: "Replit award-winning DOS games emulator",
            logo: DosGames,
            link: {
                label: "DosGames",
                href: "https://serve.bubner.me/dosgames",
            },
        },
        {
            title: "Plus more",
            techStack: [],
            logo: ThreeDots,
            description:
                "I'm always working on something new to benefit my learning and programming skills.",
        },
    ],
} as const;
