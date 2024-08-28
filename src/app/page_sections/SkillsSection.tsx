
import Skills from "../components/skillsLayout";
import { SkillList } from "../data/skills";
import { SectionStyles } from "../tools/styles/styles";


const skillSectionStyles = `flex sm:flex-col md:gap-4 lg:gap-8 md:mt-10 `

export function SkillsSection() {
  const skillsSectionContainer = `${SectionStyles} md:items-center h-full flex`;
  const skillsSectionStyles = `${skillSectionStyles} md:mb-8 flex`;
  console.log(SectionStyles)

  return (
    <div className={skillsSectionContainer} id="Skills">
      <div>
        <div className={skillsSectionStyles}>
          {SkillList.map((skill) => (
            <Skills skillSection={skill} key={`${skill.name}-skill`} />
          ))}

        </div>
        <h3 className="text-center">
          View my latest resume{" "}
          <a
            download="../../data/files/John-Ogbonna-2024-software-resume"
            className="text-cyan-600 underline"
            href="/data/files/John-Ogbonna-2024-software-resume"
          >
            here
          </a>
        </h3>
      </div>
    </div>
  );
}
