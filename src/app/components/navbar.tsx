'use client'
import Link from "next/link"
import { Section, SectionProps } from "../tools/typesAndInterfaces"
import { navIcons } from "../../../public/icons/icons"
import Image from "next/image"
import { useEffect, useState } from "react"
import { hasPathParameter } from "../tools/updateQueryStringValueWithoutNavigation"
import { usePathname, useRouter } from "next/navigation"





export const sections: Record<string, Section> = {
  Skills: {
    name: 'Skills',
    link: '#Skills',
    description: 'See a list of my skills '
  },
  Projects: {
    name: 'Projects',
    link: '#Projects',
    description: 'See a list of my projects'
  },
  Contact: {
    name: 'Contact Me',
    link: '#Contact',
    description: 'Get in Touch'
  },
  WhoAmI: {
    name: '•Who am I?',
    link: '#WhoAmI',
    description: 'See more about me',
    path: 'about'
  },
  MyGoals: {
    name: '•My Goals',
    link: '#Goals',
    description: 'See what my goals are and what I am currently looking for',
    path: 'about'
  },
  OtherInterests: {
    name: '•Other Interests/Hobbies',
    link: '#OtherInterests',
    description: 'See some of my other interests and hobbies',
    path: 'about'
  }
}

const animation = `duration-700 transition-all`
const smallSectionStyles = `sm:p-4 z-3 sm:flex-col sm:w-1/2 sm:bg-slate-600  sm:h-full sm:mr-[-1rem] relative `
const smallListStyles = `sm:py-3`
const smallWrapperStyles = `sm:w-[100vw] sm:fixed sm:left-[0rem] sm:z-2 sm:top-[0px] sm:h-[100vh] ${animation}`
const smallWrapperStylesHidden = `sm:w-[100vw] sm:fixed sm:left-[100%] sm:z-2 sm:top-[0px] sm:h-[100vh] ${animation}`
const aboutSection = hasPathParameter('about')

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
        {Object.values(sections).map((section) => {
          return (
            aboutSection && section.path && section.path === 'about' &&
            <li key={section.name} className={`md:pr-4 md:last:pr-0 hover:underline ${smallListStyles} sm:text-white`}>
              <Link href={section.link} className="sm:text-inherit"
                onClick={() => isEnabled(false)}
              >
                {section.name}
              </Link>
            </li>

            || !aboutSection && (!section.path || section.path !== 'about') &&
            <li key={section.name} className={`md:pr-4 md:last:pr-0 hover:underline ${smallListStyles} sm:text-white`}>
              <Link href={section.link} className="sm:text-inherit"
                onClick={() => isEnabled(false)}
              >
                {section.name}
              </Link>
            </li>
          )
        })}
        <a href={aboutSection ? '/' : '/about'}><li key={'linkToAalternateSection'} className={`cursor-pointer hover:underline md:border-l-2 md:border-red-600 md:pl-3 ${smallListStyles}`}>{aboutSection ? 'Home Page' : 'About Me'}</li></a>
      </ul>

    </div>
  );
}

export default function Navbar() {
  const [isExpanded, toggleExpanded] = useState<boolean>(false);
  const [_isAboutPage, setIsAboutPage] = useState(hasPathParameter('about'));
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setIsAboutPage(hasPathParameter('about'));
  }, [pathName]);

  return (
    <nav className="p-2 md:p-2 sticky top-0" id="nav">
      <div className="flex justify-between items-center relative overflow-x-clip">
        <div className={`flex items-center`}>
          <a href="/"><h2 className="md:text-[1.2rem]">John Ogbonna</h2></a>
        </div>
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
