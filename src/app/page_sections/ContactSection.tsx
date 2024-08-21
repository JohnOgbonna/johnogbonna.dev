import { SectionStyles } from "../homepage";
import { contactIcons } from "../../../public/icons/icons";
import Image from "next/image";
import { sendEmail } from "@/functions/sendemail";

const inputStyles = `w-full rounded-[3px] p-2 border-b-[1px] border-white h-[2rem] bg-slate-800 mb-4 focus:outline-none focus:ring-0`;
export function ContactSection() {
    const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        const e = event.target as HTMLFormElement
        event.preventDefault();
        if(!e.senderName.value || !e.email.value || !e.message.value) {
            alert(`Please fill in the field(s) ${!e.senderName.value ? 'Name' : ''} ${!e.email.value ? 'Email' : ''} ${!e.message.value ? 'Message' : ''}`);
            return
        }
        if(!e.email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert('Please enter a valid email');
            return
        }
        sendEmail(e.senderName.value as string, e.email.value, e.message.value);
    }

    return (
        <div
            className={`${SectionStyles} flex flex-col justify-center items-center gap-8 max-w-[500px] mx-auto lg:max-w-[1024px] lg:flex-row xl:max-w-[1280px]`}
            id="Contact"
        >
            <div>
                <div className={`mb-8`}>
                    <h1 className={`text-center text-[1.5rem] underline`}>Contact Me</h1>
                    <p className="text-center">
                        I'm always looking for new opportunities. If you have any
                        questions or would like to collaborate, please feel free to contact me!
                    </p>
                </div>
                <div>
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
                </div>
            </div>
            <form className={`flex flex-col justify-center w-full max-w-[500px] md:max-w-[800px]`}
            onSubmit={sendMessage}
            >
                <h2 className={`text-center text-[1.2rem] mb-2`}>Send Me A Message!</h2>
                <div>
                    <input className={`${inputStyles}`} type="text" id="senderName" placeholder="Enter your name" />
                    <input type="email" name="email" id="email" placeholder="Enter your email" className={`${inputStyles}`} />
                    <textarea className={`${inputStyles} min-h-[200px]`} name="message" id="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className={`bg-slate-800 text-white p-2 rounded-[3px] hover:scale-105 transition-all duration-500`}>Send Message!</button>
            </form>
        </div>
    );
}