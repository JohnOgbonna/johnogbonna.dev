'use client'
import Image from "next/image"
import { navIcons } from "../../public/icons/icons"
import { images } from "../../public/images/images"
import { SectionStyles } from "./tools/styles/styles"
import { motion } from "framer-motion"
import Link from "next/link"


export default function HomePage() {
    return (
        <motion.div
            variants={{
                hidden: { opacity: .01, x: -155 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeInOut", x: { type: "spring", stiffness: 40 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
            viewport={{ once: true }}
        >
            <div className={`${SectionStyles} justify-center flex flex-col sm:mb-0`} id={'Home'}>
                <div className={`flex flex-col items-center md:gap-8 md:flex-row justify-around `}>
                    <div className={` sm:mb-[60px] sm:flex sm:flex-col sm:items-center`}>
                        <div>
                            <motion.h1 className={`sm:text-[40px] sm:text-center text-[46px] font-bold md:w-fit`}
                                variants={{
                                    hidden: { opacity: .01, x: -155 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                initial="hidden"
                                whileInView={"visible"}
                                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
                            ><span className={`hover:underline cursor-pointer`}
                            >Fullstack </span> • <span className={`hover:underline cursor-pointer`}>Cloud</span></motion.h1>
                            <p className={`max-w-[400px]`}>{`I'm a Full Stack Developer, capable of working in Front-End and Back-End systems, with Cloud experience and AWS Developer Associate Certification`}</p>
                        </div>
                        <Link href={`/about`}><div className={`flex items-center mt-6`}>
                            <p className={`mr-4`}>See More About me</p>
                            <Image src={navIcons.rightArrow} alt='rightarrow' className={`w-8`} />
                        </div>
                        </Link>
                    </div>
                    <div className={`flex justify-center`}>
                        <Image src={images.profile_picture} alt="Profile Picture" className={`sm:w-[300px] md:rounded-[100%] md:w-[300px] sm:aspect-square sm:object-cover`} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
