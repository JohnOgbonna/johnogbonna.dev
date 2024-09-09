'use client'

import { sendEmail } from "@/functions/sendemail";
import { SectionStyles } from "../tools/styles/styles";
import ContactIcons from "../components/contactIcons";
import { motion, } from "framer-motion";
import { toast, Toaster } from "sonner";
const inputStyles = `w-full rounded-[3px] p-2 border-b-[1px] border-white h-[2rem] bg-slate-800 mb-4 focus:outline-none focus:ring-0`;

export function ContactSection() {

    const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
        const e = event.target as HTMLFormElement
        event.preventDefault();
        if (!e.senderName.value || !e.email.value || !e.message.value) {
            toast.error(`Please fill in the field(s) ${!e.senderName.value ? 'Name' : ''} ${!e.email.value ? 'Email' : ''} ${!e.message.value ? 'Message' : ''}`);
            return
        }
        if (!e.email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error('Please enter a valid email');
            return
        }
        let messageSuccess = await sendEmail(e.senderName.value as string, e.email.value, e.message.value);
        if (messageSuccess) {
            toast.success('Message Sent');
            e.reset();
        } else {
            toast.error(`Something went wrong. Please try again`);
        }
    }

    return (
        <motion.div
            className={`${SectionStyles} flex flex-col justify-center items-center gap-8 max-w-[500px] mx-auto lg:max-w-[1024px] lg:flex-row xl:max-w-[1280px]`}
            id="Contact"
            variants={{
                hidden: { opacity: .01, x: -155 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
        >
            <Toaster richColors position="top-center" closeButton={true}/>
            <div>
                <div className={`mb-8`}
                >
                    <h1 className={`text-center text-[1.5rem] underline`}>Contact Me</h1>
                    <p className="text-center">
                        {`I'm always looking for new opportunities. If you have any
                        questions or would like to collaborate, please feel free to contact me!`}
                    </p>
                </div>
                <div>
                    <ContactIcons />
                </div>
            </div>
            <motion.form className={`flex flex-col justify-center w-full max-w-[500px] md:max-w-[800px]`}
                onSubmit={sendMessage}
                id="Contact"
                variants={{
                    hidden: { opacity: .01, x: -155 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
            >
                <h2 className={`text-center text-[1.2rem] mb-2`}>Send Me A Message!</h2>
                <div>
                    <input className={`${inputStyles}`} type="text" id="senderName" placeholder="Enter your name" />
                    <input type="email" name="email" id="email" placeholder="Enter your email" className={`${inputStyles}`} />
                    <textarea className={`${inputStyles} min-h-[200px]`} name="message" id="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className={`bg-slate-800 text-white p-2 rounded-[3px] hover:scale-105 transition-all duration-500`}>Send Message!</button>
            </motion.form>
        </motion.div>
    );
}