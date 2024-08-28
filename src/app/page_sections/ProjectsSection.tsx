'use client'
import { projectsList } from "../data/projects";
import { project } from "../tools/typesAndInterfaces";
import { useState } from "react";
import Image from "next/image";
import { pageIcons } from "../../../public/icons/icons";
import { updateQueryStringValueWithoutNavigation, deleteQueryStringValueWithoutNavigation, getSearchParam } from "../tools/updateQueryStringValueWithoutNavigation";
import { SectionStyles } from "../tools/styles/styles";


interface ProjectPanelProps {
    project: project;
    onclick: (project: project | null) => void;
}


function ProjectPanel(props: ProjectPanelProps) {
    const { images, name, description } = props.project;
    const [expandDescription, setExpandDescription] = useState(false);

    return (
        <div className={`w-[30%] md:hover:scale-105 hover:underline duration-300 mr-4 mt-8 shadow-custom1 p-2 rounded-md min-w-[350px]`}
            onMouseEnter={() => setExpandDescription(true)}
            onMouseLeave={() => setExpandDescription(false)}
            onClick={() => props.onclick(props.project)}
        >
            <Image src={images[0]} alt={name} className={`rounded-[5px]`} />
            <h3 className={`text-[1.2rem] `}>{name}</h3>
            <p
                className={`${expandDescription
                    ? 'md:line-clamp-none max-h-[400px] md:absolute md:z-10 md:bg-inherit'
                    : 'md:line-clamp-1 md:max-h-[40px] sm:line-clamp-2'
                    } duration-700 transition-all ease-in-out`}
            >
                {description}
            </p>
        </div>
    );
}

function ProjectSectionLargeView(props: ProjectPanelProps) {
    const { images, name, description, toolsUsed, repositoryLink, liveLink } = props.project;
    const [displayImage, setDisplayImage] = useState(0);

    const nextImage = () => {
        if (displayImage + 1 >= images.length) {
            setDisplayImage(0);
        } else {
            setDisplayImage(displayImage + 1);
        }
    };

    const prevImage = () => {
        if (displayImage - 1 < 0) {
            setDisplayImage(images.length - 1);
        } else {
            setDisplayImage(displayImage - 1);
        }
    };

    return (
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-black z-10 flex items-center justify-center bg-opacity-80 px-2 overflow-y-scroll sm:flex sm:items-center sm:pb-4 sm:pt-8-4`}
            onClick={(e) => {
                if (e.target === e.currentTarget) props.onclick(null);
            }}
        >
            <div className={`text-white md:flex md:items-center`}>
                <div className={``}>
                    <div className={`flex justify-center max-h-[600px]`}>

                        {displayImage > 0 ? <Image src={pageIcons.scrollArrow} alt='leftarrow' className={`w-8 md:w-12 hover:scale-110 duration-300 `}
                            onClick={prevImage}
                        />
                            : <div className={`ml-[2rem]`}></div>}
                        <div className={``}>
                            <Image src={images[displayImage]} alt={name} className={`rounded-[5px] duration-700 transition-all ease-in-out  sm:w-fit sm:max-h-[500px] md:height-[]`} />
                        </div>
                        {displayImage < images.length - 1 ? <Image src={pageIcons.scrollArrow} alt='rightarArow' className={`w-8 rotate-180 md:w-12 hover:scale-110 duration-300 ${displayImage < images.length - 0 ? '' : 'mr-[2rem]'}`}
                            onClick={nextImage} />
                            : <div className={`mr-[2rem]`}></div>
                        }

                    </div>
                    <div className={`flex justify-center items-center`}>
                        {
                            images.map((_image, index) =>
                                <div className={`${index === displayImage ? 'h-[1rem] w-[1rem]' : 'h-[.8rem] w-[.8rem]'} bg-white hover:scale-125 duration-300 rounded-full mr-1 my-2`} key={`${name}-image0${index}`}
                                    onClick={() => setDisplayImage(index)}></div>
                            )
                        }
                    </div>
                </div>
                <div className={`sm:px-[2rem] h-fit md:self-center md:ml-3`}>
                    <h3 className={`text-[1.2rem] underline`}>{name}</h3>
                    <p
                        className={``}
                    >
                        {description}
                    </p>
                    <ul className={`mt-6`}>
                        <li className={`underline flex mb-1 hover:scale-105 transition-all duration-500`}>
                            <Image src={pageIcons.gitHub} className={`w-[1.5rem]`} alt="github" />
                            <a href={repositoryLink} target="_blank">GitHub Repository</a>
                        </li>
                        {
                            liveLink &&
                            <li className={`underline flex duration-500 hover:scale-105 transition-all`}> 
                                <Image src={pageIcons.liveLink} className={`w-[1.5rem]`} alt="live" /><a href={liveLink} target="_blank">Live Demo</a>
                                </li>
                        }
                        
                    </ul>
                    <div className={`mt-4`}>
                        <p className={``}>Created With:</p>
                        <div className={`flex flex-wrap `}>
                            {
                                toolsUsed.map(tool => <p key={`${tool}-key`} className={`text-[.8rem] rounded-[8px] p-1 sm:text-[13px] border border-slate-600 mr-2 last:mr-0 mb-2 text-center w-fit md:text-[.9rem]`}>{tool}</p>)
                            }
                        </div>
                    </div>
                </div>
                <Image
                    src={pageIcons.closeIcon}
                    onClick={() => props.onclick(null)}
                    className={`md:self-start text-[1.5rem] sm:fixed sm:top-5 sm:right-5 sm:cursor-pointer w-[1.2rem]`}
                    alt="close"
                />
            </div>
        </div>
    );
}

export default function ProjectSection() {
    const [largeView, enableLargeView] = useState<project | null>(
        projectsList.find((project) => project.id === getSearchParam('project')) ?? null
    );

    const projectOnclick = (project: project | null) => {
        const params = new URLSearchParams();
        if (project) {
            updateQueryStringValueWithoutNavigation('project', project.id);
            enableLargeView(project);
        }
        else {
            enableLargeView(null);
            params.delete('project');
            deleteQueryStringValueWithoutNavigation(['project']);
        }
    }

    return (
        <div id={'Projects'} className={` ${SectionStyles} min-h-[100vh] p-4 flex flex-col justify-center`}>
            <h2 className={`text-[1.5rem]`}>Projects</h2>
            <div className={`flex items-center`}>
                <div className={`flex flex-wrap rounded-[8px] justify-center`}
                >
                    {projectsList.map((project) => (
                        <ProjectPanel key={project.name} project={project} onclick={projectOnclick}
                        />
                    ))}
                </div>
                {largeView && <ProjectSectionLargeView project={largeView} onclick={projectOnclick} />}
            </div>
        </div>
    );
}
