import { contactIcons } from "../../../public/icons/icons";
import Image from "next/image";

export default function ContactIcons() {
    return (
        <div className={`flex justify-center gap-8`}>
            {
                Object.values(contactIcons).map((icon) => (
                    <a
                        className={`cursor-pointer flex flex-col items-center hover:underline hover:scale-105 transition-all duration-500`} key={icon.name} href={icon.link} target="_blank">
                        <Image src={icon.icon} alt={icon.name} className={`w-[40px] h-[40px]`} />
                        <p className={`text-center`}>{icon.name}</p>
                    </a>
                ))
            }
        </div>
    )
}
