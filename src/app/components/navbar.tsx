'use client'
import Link from "next/link"
import { Section, SectionProps } from "../tools/typesAndInterfaces"
import { navIcons } from "../../../public/icons/icons"
import Image from "next/image"
import { useState } from "react"


export const sections: Record<string, Section> = {
    Skills: {
        name: 'Skills',
        link: '#skills',
        description: 'See a list of my skills '
    },
    Projects: {
        name: 'Projects',
        link: '#',
        description: 'See a list of my projects'
    },
    Contact: {
        name: 'Contact Me',
        link: '#',
        description: 'Get in Touch'
    },
}

const animation = `duration-700 transition-all`
const smallSectionStyles = `sm:p-4 z-3 sm:flex-col sm:w-1/2 sm:bg-slate-600  sm:h-full sm:mr-[-1rem] relative `
const smallListStyles = `sm:py-3`
const smallWrapperStyles = `sm:w-[100vw] sm:fixed sm:left-[0rem] sm:z-2 sm:top-[0px] sm:h-[100vh] ${animation}`
const smallWrapperStylesHidden = `sm:w-[100vw] sm:fixed sm:left-[100%] sm:z-2 sm:top-[0px] sm:h-[100vh] ${animation}`


function Sections({ enabled, isEnabled }: SectionProps) {
  const handleWrapperClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget && enabled) {
      isEnabled(false);
    }
  };

  return (
    <div
      className={`flex flex-row-reverse ${enabled ? smallWrapperStyles : smallWrapperStylesHidden}`}
      onClick={handleWrapperClick}
    >
      <ul className={`flex ${smallSectionStyles}`}>
        {Object.values(sections).map((section) => (
          <li key={section.name} className={`md:pr-4 md:last:pr-0 hover:underline ${smallListStyles} sm:text-white`}>
            <Link href={section.link} className="sm:text-inherit">
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [isExpanded, toggleExpanded] = useState<boolean>(false);

  return (
    <nav className="p-2 md:p-2 sticky top-0" id="nav">
      <div className="flex justify-between items-center relative overflow-x-clip">
        <h2 className="md:text-[1.2rem]">John Ogbonna</h2>
        <Sections enabled={isExpanded} isEnabled={toggleExpanded} />
        <Image
          src={navIcons.burgerMenu}
          id="burgerMenu"
          alt="menu"
          className="md:hidden"
          onClick={() => toggleExpanded(!isExpanded)}
        />
      </div>
    </nav>
  );
}
