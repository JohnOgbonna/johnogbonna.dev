'use client'
import { skill } from "../tools/typesAndInterfaces";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../tools/styles/animations";

interface Props {
    skillSection: skill,
    index: number
}

export default function Skills(props: Props) {
    return (
        <div>
            <div className={`flex flex-col px-4 sm:mb-8`}>
                <motion.div
                    variants={{
                        hidden: { opacity: .01, x: -155 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    whileInView={"visible"}
                    transition={{ duration: 0.5, delay: props.index * 0.2, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                >
                    <div className={`mb-[1.5rem] md:mb-8`}>
                        <h2 className={`text-[1.3rem] underline`}>{props.skillSection.name}</h2>
                        <p>{props.skillSection.description}</p>
                    </div>
                    {props.skillSection.name !== 'Cloud' && <p className={`mb-4 text-center italic`}>{`${props.skillSection.name} tools I use:`}</p>
                        || props.skillSection.name === 'Cloud' && <p className={`mb-4 text-center italic`}>{`Cloud Experience/Certifications:`}</p>
                    }
                </motion.div>
                <ul className={`flex flex-wrap justify-center`}>
                    {
                        props.skillSection.programs.map((program, index) => (
                            <motion.li className={`rounded-[8px] p-1 sm:text-[13px] border border-slate-600 mr-2 last:mr-0 mb-2 text-center w-fit hover:scale-105 duration-500 transition-all ease-in-out cursor-default`}
                                key={`${program}key`}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView={"animate"}
                                transition={{ duration: 0.7 }}
                                custom={index}
                                viewport={{ once: true }}
                            >{program}</motion.li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
