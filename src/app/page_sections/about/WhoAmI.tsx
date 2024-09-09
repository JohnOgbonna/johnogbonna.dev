'use client'
import ContactIcons from "@/app/components/contactIcons";
import { SectionStyles } from "@/app/tools/styles/styles";
import aboutMe1 from "../../../../public/images/about-me-1.jpg";
import Image from "next/image";
import { navIcons } from "../../../../public/icons/icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoAmI() {
    return (
        <motion.div className={`${SectionStyles} flex flex-col justify-center text-center md:flex-row items-center md:justify-between max-w-[1024px] mx-auto `} id={'WhoAmI'}
        variants = {{
            hidden: {opacity: .01, x: -155},
            visible: {opacity: 1, x: 0}
            }}
            initial = "hidden"
            whileInView={"visible"}
            transition = {{duration: 0.5, delay: 0.55, ease: "easeInOut", x: {type: "spring", stiffness: 40}, opacity: {duration: .8, delay: 0.2, ease: "easeInOut"}}}
            viewport={{ once: true }}
        >
            <div className={`mb-8 max-w-[500px] mr-4`}>
                <motion.h2 className={`text-[1.5rem] font-bold`}
                variants={{
                    hidden: { opacity: .01, x: -155 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
                >Who am I?</motion.h2>
                <p className={`text-center md:text-left`}>{`I'm John Ogbonna, a Full Stack Developer with Cloud Experience and Certifications. I'm always learning something new, and always looking to connect!`}</p>
                <h3 className={`font-bold my-4`}>Connect with me:</h3>
                <ContactIcons />
                <Link href={`#Goals`}>
                    <div className={`mt-6 flex justify-center`}>
                        <p>Get to Know Me</p>
                        <Image src={navIcons.downArrow} alt='rightarrow' className={`w-8 `} />
                    </div>
                </Link>
            </div>
            <div>
                <Image src={aboutMe1} alt="Profile Picture" className={`sm:w-[300px] md:rounded-[100%] md:w-[300px] sm:aspect-square sm:object-cover sm:mx-auto`} />
            </div>
        </motion.div >
    )
}