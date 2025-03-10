import { Bubner, BubnerReal, GitHubG, Globe, LinkedIn } from "@/images";
import ResumeData from "./data";
import { StandardData } from "./standard-data";

function removeStaticImageData(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(removeStaticImageData);
    } else if (obj && typeof obj === "object") {
        const newObj: any = {};
        for (const key in obj) {
            if (obj[key] && typeof obj[key] === "object" && 'src' in obj[key] && 'height' in obj[key] && 'width' in obj[key] && 'blurDataURL' in obj[key]) {
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

export const LiteData: ResumeData = {
    ...removeStaticImageData(StandardData),
    // We re-add images where needed for full optimisation
    // TODO: continue optimising by adding back some more
    pfp: Bubner,
    pfpPrint: BubnerReal,
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
};