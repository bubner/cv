import { Bubner, BubnerReal, Dot, GitHub, Globe, LinkedIn } from "@/images";
import ResumeData from "./data";
import { StandardData } from "./standard-data";

function removeStaticImageData(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(removeStaticImageData);
    } else if (obj && typeof obj === "object") {
        const newObj: any = {};
        for (const key in obj) {
            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                "src" in obj[key] &&
                "height" in obj[key] &&
                "width" in obj[key] &&
                "blurDataURL" in obj[key]
            ) {
                // Recursively remove all StaticImageData instances
                newObj[key] = null;
            } else {
                newObj[key] = removeStaticImageData(obj[key]);
            }
        }
        return newObj;
    }
    return obj;
}

function addSkillsIndentedPoints(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(addSkillsIndentedPoints);
    } else if (obj && typeof obj === "object") {
        const newObj: any = {};
        for (const key in obj) {
            if (key === "info" && Array.isArray(obj[key])) {
                newObj[key] = obj[key].map((item: any) => {
                    // Re-add a custom lite image for dot points so we don't have strange indents
                    if (item.indented && !item.grouped) {
                        return {
                            ...item,
                            icon: Dot,
                        };
                    }
                    return item;
                });
            } else {
                newObj[key] = addSkillsIndentedPoints(obj[key]);
            }
        }
        return newObj;
    }
    return obj;
}

export const LiteData: ResumeData = addSkillsIndentedPoints({
    ...removeStaticImageData(StandardData),
    // We re-add images where needed for full optimisation
    pfp: Bubner,
    pfp_print: BubnerReal,
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
});
