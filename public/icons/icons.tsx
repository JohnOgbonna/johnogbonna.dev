import burgermenu from '../../public/icons/burger-menu.svg'
import rightarrow from '../../public/icons/right-arrow.svg'
import arrow from '../../public/icons/arrow.svg'
import closeicon from '../../public/icons/close.svg'
import github from '../../public/icons/github.svg'
import livelink from '../../public/icons/web-icon.svg'
import linkedin from '../../public/icons/linkedin.svg'
import email from '../../public/icons/email.svg'
import downArrow from '../../public/icons/down-arrow.svg'


export const navIcons = {
    burgerMenu: burgermenu,
    rightArrow: rightarrow,
    downArrow: downArrow
}

export const pageIcons = {
    scrollArrow: arrow,
    closeIcon: closeicon,
    gitHub: github,
    liveLink: livelink
}

export const contactIcons = {
    linkedin:{
        name: "Linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/johnogbonna/"
    },
    email: {
        name: "Email",
        icon: email,
        link: "mailto:johnny.ogb@gmail.com"
    },
    github: {
        name: "Github",
        icon: github,
        link: "https://github.com/JohnOgbonna"
    }
}