'use client'
import { motion } from "framer-motion";
import Skills from "../components/skillsLayout";
import { SkillList } from "../data/skills";
import { SectionStyles } from "../tools/styles/styles";

const skillSectionStyles = `flex sm:flex-col md:gap-4 lg:gap-8 md:mt-10`

export function SkillsSection() {
  const skillsSectionContainer = `${SectionStyles}`;
  const skillsSectionStyles = `${skillSectionStyles} md:mb-8 flex`;

  return (
    <div className={skillsSectionContainer} id="Skills"
    >
      <motion.h2 className="text-[1.5rem] sm:mb-8"
       variants = {{
        hidden: {opacity: .01, x: -155},
        visible: {opacity: 1, x: 0}
        }}
        initial = "hidden"
        whileInView={"visible"}
        transition = {{duration: 0.5, delay: 0.5, ease: "easeInOut", x: {type: "spring", stiffness: 30}, opacity: {duration: .8, delay: 0.2, ease: "easeInOut"}}}
      >Skills</motion.h2>
      <div className={`md:items-center h-full flex`}>
        <div>
          <div className={skillsSectionStyles}>
            {SkillList.map((skill, index) => (
              <Skills skillSection={skill} key={`${skill.name}-skill`} index={index} />
            ))}
          </div>
          <h3 className="text-center">
            View my latest resume
            <a
              download="../../data/files/John-Ogbonna-2024-software-resume"
              className="text-red-600 underline"
              href="/data/files/John-Ogbonna-2024-software-resume"
            >
              here
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
