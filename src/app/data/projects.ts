import { project } from "../tools/typesAndInterfaces";
import { Projects } from "../../../public/images/projects/projectExports";

export const cruncheeMunchies: project = {
    id: 'cruncheeMunchies',
    name: 'Crunchee Munchies Website',
    description: "A web client for viewing Crunchee Munchies products and requesting orders",
    toolsUsed: ['HTML', 'SCSS', 'CSS', 'Javascript', 'React.js', 'Node.js', 'Express.js', 'Firebase', 'Render'],
    images: Projects.CruncheeMunchies,
    videoSrc: '',
    repositoryLink: 'https://github.com/JohnOgbonna/cruncheemunchiesClient',
    liveLink: 'https://cruncheemunchies-ee6b3.web.app/'
}

export const chatSocket: project = {
    id: 'chatSocket',
    name: 'Chat Socket',
    description: 'A realtime chat application built with Websockets. Includes features like chat history, user search and authentication, message delete, and more.',
    toolsUsed: ['HTML', 'Tailwind CSS', 'Typescript', 'React.js', 'Node.js', 'Express.js', 'Websockets', 'Dynamo DB'],
    images: Projects.ChatSocket,
    videoSrc: '',
    repositoryLink: 'https://github.com/JohnOgbonna/ChatSocket-server',
}

export const bioWebsite: project = {
    id: 'bioWebsite',
    name: 'Bio Website',
    description: 'A personal website built with front end tools like React.js and SASS / SCSS',
    toolsUsed: ['HTML', 'SCSS', 'CSS', 'Javascript', 'React.js', 'Firebase'],
    images: Projects.BioWebsite,
    videoSrc: '',
    repositoryLink: 'https://github.com/JohnOgbonna/johnogbonna.com',
    liveLink: 'https://johnogbonna.site/'
}

export const randomNumbers: project = {
    id: 'randomNumbers',
    name: 'Random Numbers',
    description: 'A web application that generates random numbers based on select user constraints',
    toolsUsed: ['HTML', 'CSS', 'Javascript', 'Firebase'],
    images: Projects.RandomNumbers,
    videoSrc: '',
    repositoryLink: 'https://github.com/JohnOgbonna/random-numbers',
    liveLink: 'https://randomnumbers-445bc.web.app/'
}

export const devSite: project = {
    id: 'devSite',
    name: 'Personal Dev Site (This Website)',
    description: 'A personal website built with front end tools like Next.js, React.js and WailwindCSS',
    toolsUsed: ['HTML', 'TailwindCSS', 'Javascript', 'React.js', 'Next.js', 'Vercel'],
    images: Projects.DevSite,
    videoSrc: '',
    repositoryLink: 'https://github.com/JohnOgbonna/johnogbonna.dev',
}


export const projectsList: project[] = [cruncheeMunchies, chatSocket, bioWebsite, randomNumbers, devSite]