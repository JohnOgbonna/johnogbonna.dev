'use client'
import Image from "next/image"
import { navIcons } from "../../public/icons/icons"
import { images } from "../../public/images/images"
import { SkillsSection } from "./page_sections/SkillsSection"
import ProjectSection from "./page_sections/ProjectsSection"

export const SectionStyles = `min-h-[100vh] p-2 md:p-4 sm:mb-[300px]`
export default function HomePage() {
    return (
        <div>
            <div className={`${SectionStyles} justify-center flex flex-col`} id={'Home'}>
                <div className={`flex flex-col md:items-center md:gap-8 md:flex-row justify-around `}>
                    <div className={`sm:mt-[200px] sm:mb-[60px] sm:flex sm:flex-col sm:items-center`}>
                        <div>
                            <h1 className={`sm:text-[40px] sm:text-center text-[46px] font-bold md:w-fit`}><span className={`hover:underline cursor-pointer`}>Fullstack </span> • <span className={`hover:underline cursor-pointer`}>Cloud</span></h1>
                            <p className={`max-w-[400px]`}>I'm a Full Stack Developer, capable of working in Front-End and Back-End systems, with Cloud experience and AWS Practicioner certification</p>
                        </div>
                        <div className={`flex items-center mt-6`}>
                            <p className={`mr-4`}>See More About me</p>
                            <Image src={navIcons.rightArrow} alt='rightarrow' className={`w-8`} />
                        </div>
                    </div>
                    <div className={`flex justify-center`}>
                        <Image src={images.profile_picture} alt="Profile Picture" className={`sm:w-[300px] md:rounded-[100%] md:w-[300px] sm:aspect-square sm:object-cover`} />
                    </div>
                </div>
            </div>
            <SkillsSection />
            <ProjectSection />
        </div>
    )
}