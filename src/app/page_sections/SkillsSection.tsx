'use client'
import { motion } from "framer-motion";
import Skills from "../components/skillsLayout";
import { SkillList } from "../data/skills";
import { SectionStyles } from "../tools/styles/styles";

const skillSectionStyles = `flex sm:flex-col md:gap-4 lg:gap-8 md:mt-6`

export function SkillsSection() {
  const skillsSectionStyles = `${skillSectionStyles} md:mb-8 flex`;

  return (
    <div className={`${SectionStyles}`} id="Skills"
    >
      <div className={`md:items-center min-h-[100vh] flex`}>
        <div>
          <motion.h2 className="text-[1.5rem] sm:mb-8"
            variants={{
              hidden: { opacity: .01, x: -155 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut", x: { type: "spring", stiffness: 30 }, opacity: { duration: .8, delay: 0.2, ease: "easeInOut" } }}
          >Skills</motion.h2>
          <div className={`${skillsSectionStyles}`}>
            {SkillList.map((skill, index) => (
              <Skills skillSection={skill} key={`${skill.name}-skill`} index={index} />
            ))}
          </div>
          <h3 className="text-center">
            {'View my latest resume '}
            <a
              className="text-red-600 underline"
              href={process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
