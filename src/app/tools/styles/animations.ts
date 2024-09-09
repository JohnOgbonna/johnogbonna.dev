export const fadeIn = () => {
    return{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
    }
}
export const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}
export const fadeInHorizontalAnimationVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}
export const delayedFadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: .1 + (0.05 * index),
            duration: .5,
            type: "spring",
            stiffness: 80
        }
    })
}

