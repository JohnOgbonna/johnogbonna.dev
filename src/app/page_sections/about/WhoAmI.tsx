import ContactIcons from "@/app/components/contactIcons";
import { SectionStyles } from "@/app/tools/styles/styles";
import aboutMe1 from "../../../../public/images/about-me-1.jpg";
import Image from "next/image";
import { navIcons } from "../../../../public/icons/icons";

export default function WhoAmI() {
    return (
        <div className={`${SectionStyles} flex flex-col justify-center text-center md:flex-row items-center md:justify-between max-w-[1024px] mx-auto `} id={'WhoAmI'}>
            <div className={`mb-8 max-w-[500px] mr-4`}>
                <h2 className={`text-[1.5rem] `}>Who am I?</h2>
                <p className={`text-left`}>I'm John Ogbonna, a Full Stack Developer with Cloud Experience and Certifications. I'm always learning something new, and always looking to connect!</p>
                <h3 className={`font-bold my-4`}>Connect with me:</h3>
                <ContactIcons />
                <div className={`mt-6 flex justify-center`}>
                    <p>Get to Know Me</p>
                    <Image src={navIcons.downArrow} alt='rightarrow' className={`w-8 `} />
                </div>
            </div>
            <div>
                <Image src={aboutMe1} alt="Profile Picture" className={`sm:w-[300px] md:rounded-[100%] md:w-[300px] sm:aspect-square sm:object-cover sm:mx-auto`} />
            </div>
        </div >
    )
}