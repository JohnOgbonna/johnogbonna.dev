'use client'
import { SectionStyles } from "@/app/tools/styles/styles";
import { goalsSectionSelect, hobbySectionSelect } from "@/app/tools/typesAndInterfaces";
import { useState } from "react";
import { navIcons } from "../../../../public/icons/icons";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function MyGoals() {
    const [expandedSections, setExpandedSections] = useState<goalsSectionSelect>({
        goals: false,
        lookingFor: false
    })
    const toggleSection = (section: keyof goalsSectionSelect) => {
        setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
    }

    const sections = [
        {
            id: "goals",
            name: "My Goal",
            description: `It may sound a bit cliche but put shortly, I'm looking to be the best version of myself possible. Whether it's my projects, personal goals, or personal fitness, I want to be at the top of my game. Unfortunatley, like most things in life, that is easier said than done! Thats why I'm always looking for opportunities to grow, learn and push myself out of my comfort zone! When it came to physical fitness, my motto was "I will never stop!" —and now, I'm expanding that mindset to encompass all areas of my life!`
        },
        {
            id: "lookingFor",
            name: "What am I looking for?",
            description: "I am currenly looking for a full-time Full Stack Software Developer positon. I am open to remote, hybrid, and in-person opportunities all across Canada. I am also looking for opportunities to collaborate, help with, and contribute to projects. Don't hesitate to reach out if you have any questions, or if you want to get in touch!"
        }

    ]
    return (
        <motion.div className={`${SectionStyles} mx-auto flex flex-col justify-center text-center items-center  max-w-[1024px]`} id={'Goals'}
            variants={{
                hidden: { opacity: .01, x: -155 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut", x: { type: "spring", stiffness: 40 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
            viewport={{ once: true }}
        >
            <motion.h2 className={`text-[1.5rem] font-bold mb-4`}
                variants={{
                    hidden: { opacity: .01, x: -155 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
            >My Goal • What am I looking for?</motion.h2>
            {sections.map((section) => {
                const sectionSelected = expandedSections[section.id as keyof goalsSectionSelect];
                return (
                    <div className={`mb-8 flex flex-col justify-center items-center underline] ${sectionSelected ? 'max-h-[1000px]' : 'max-h-[250px] overflow-hidden'}`} key={section.id}>
                        <div className={`flex cursor-pointer text-[1.2rem]'} transition-all ease-in-out duration-700 `}
                            onClick={() => toggleSection(section.id as keyof goalsSectionSelect)}
                        >
                            <h2 className={`text-[1.2rem]`}>{section.name}</h2>
                            <Image src={sectionSelected ? navIcons.upArrow : navIcons.downArrow} alt='collapse/expand arrow' className={`w-6 `} />
                        </div>
                        <AnimatePresence>
                            {sectionSelected && <motion.div
                                key={expandedSections[section.id as keyof goalsSectionSelect] ? 'expanded' : 'collapsed'}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <p className={`mb-4 `}>{section.description}</p>
                                {section.id === 'lookingFor' && <p className={`text-red-600 hover:underline cursor-pointer`}><a href="/#Skills">See my skills here </a></p>}
                            </motion.div>}
                        </AnimatePresence>
                    </div>
                )
            })}

        </motion.div>
    )
}