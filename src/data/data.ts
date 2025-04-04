import { StaticImageData } from "next/image";

import type { JSX } from "react";

/**
 * Common data struct for resume data.
 *
 * @author Lucas Bubner, 2025
 */
export default interface ResumeData {
    name: string;
    initials: string;
    pfp?: StaticImageData;
    pfp_print?: StaticImageData;
    wakatime?: {
        name: string;
        chart: string;
    };
    location: string;
    location_link: string;
    about: string;
    summary: string;
    website: string;
    contact: {
        email: string;
        tel: string;
        social: { name: string; url: string; icon?: StaticImageData }[];
    };
    education: {
        school: string;
        degree: string;
        start: string;
        end: string;
        logo?: StaticImageData;
    }[];
    work: {
        company: string;
        link: string;
        badges: string[];
        title: string;
        logo?: StaticImageData;
        start: string;
        end: string;
        description: string;
    }[];
    skills: {
        header: string;
        custom_card_props?: string;
        info: {
            text: string;
            icon?: StaticImageData;
            indented?: boolean;
            grouped?: boolean;
        }[];
    }[];
    pre_projects?: JSX.Element;
    projects: {
        title: string;
        tech_stack: string[];
        description: string;
        link?: {
            label: string;
            href: string;
        };
        logo?: StaticImageData;
    }[];
    post_projects?: JSX.Element;
}
