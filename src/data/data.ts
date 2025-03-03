import { StaticImageData } from "next/image";

/**
 * Common data struct for resume data.
 *
 * @author Lucas Bubner, 2024
 */
export default interface ResumeData {
    name: string;
    initials: string;
    pfp: StaticImageData;
    wakatime?: {
        name: string;
        chart: string;
    };
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    website: string;
    contact: {
        email: string;
        tel: string;
        social: { name: string; url: string; icon: StaticImageData }[];
    };
    education: {
        school: string;
        degree: string;
        start: string;
        end: string;
        logo: StaticImageData;
    }[];
    work: {
        company: string;
        link: string;
        badges: string[];
        title: string;
        logo: StaticImageData;
        start: string;
        end: string;
        description: string;
    }[];
    descriptive_skills: {
        skill: string;
        icon: StaticImageData;
        description: string;
    }[];
    skills: string[];
    pre_projects?: JSX.Element;
    projects: {
        title: string;
        techStack: string[];
        description: string;
        link?: {
            label: string;
            href: string;
        };
        logo: StaticImageData;
    }[];
    post_projects?: JSX.Element;
}
