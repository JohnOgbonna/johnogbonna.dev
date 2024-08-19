import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { Dispatch, SetStateAction } from "react";

export interface Section {
    name: string;
    link: string;
    description: string;
}

export interface SectionProps {
    enabled: boolean
    isEnabled:Dispatch<SetStateAction<boolean>>
}

export type skill = {
    name: string,
    description: string,
    programs: string[]
}

export type project = {
    id: string,
    name: string,
    description: string,
    toolsUsed: string[],
    images: StaticImageData[],
    videoSrc: string,
    repositoryLink: string,
    liveLink?: string
}