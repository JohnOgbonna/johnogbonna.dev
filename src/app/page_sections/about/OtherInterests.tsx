'use client'
import { SectionStyles } from "@/app/tools/styles/styles"
import { hobbySectionSelect } from "@/app/tools/typesAndInterfaces";
import { useState } from "react";
import Image from "next/image";
import { navIcons } from "../../../../public/icons/icons";

export default function OtherInterests() {
    const [expandedSections, setExpandedSections] = useState<hobbySectionSelect>({
        skateboarding: false,
        music: false,
        fitness: false
    })
    const toggleSection = (section: keyof hobbySectionSelect) => {
        setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
    }
    const interests = [
        {
            id: 'fitness',
            name: 'Bodybuilding and Fitness',
            description: 'From bodybuilding to just staying in shape, I enjoy (almost) all aspects of fitness. My passion began as a young boy, driven by the desire to be as big and strong as possible. I made great progress and fell in love with the improvements I saw in myself. This taught me a valuable lesson: the more you put into life, the more you get out of it. Over time, my goals have slowly—but surely—shifted from being as big and muscular as possible to focusing more on longevity and wellness. Whatever form it takes, fitness will always be a part of my life for the foreseeable future!'
        },
        {
            id: 'music',
            name: 'Music',
            description: "From time to time, I write (and occasionally record) hip-hop music. While I'm not aiming to be a music icon, it's a fun and expressive hobby that I enjoy whenever I have the time."
        },
        {
            id: 'skateboarding',
            name: 'Skateboarding',
            description: "Believe it or not, my previous favorite sport and hobby was skateboarding! Growing up, I dreamed of becoming a sponsored skateboarder. While I never quite reached that level of skill (or got close for that matter), it was an amazing experience and an interesting hobby that brought a lot of fun into my life."
        },
    ]
    return (
        <div className={`${SectionStyles} mx-auto flex flex-col justify-center text-center items-center max-w-[1024px]`} id={'OtherInterests'}>
            <h2 className={`text-[1.5rem] font-bold `}>Other Interests and Hobbies</h2>
            <p className={`mb-4`}>What do I do for fun?</p>
            <ul>
                {interests.map((interest) => {
                    const sectionSelected = expandedSections[interest.id as keyof hobbySectionSelect];
                return (
                    <li key={interest.id}
                        className={`my-6 ${sectionSelected ? 'max-h-[1000px]' : 'max-h-[300px] overflow-hidden'} text-center transition-all duration-700 ease-in-out`}>
                        <div className={`flex cursor-pointer justify-center transition-all duration-700 ease-in-out`}
                            onClick={() => toggleSection(interest.id as keyof hobbySectionSelect)}
                        >
                            <h3 className={`font-bold text-[1.2rem]`}>{`•${interest.name}`}</h3>
                            <Image src={expandedSections[interest.id as keyof hobbySectionSelect] ? navIcons.upArrow : navIcons.downArrow} alt='collapse/expand arrow' className={`w-5 `} />
                        </div>
                        {sectionSelected && <p className={`text-left`}>{interest.description}</p>}
                    </li>
                )})}
            </ul>
        </div>
    )
}