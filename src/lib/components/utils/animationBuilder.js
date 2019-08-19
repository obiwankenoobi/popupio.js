// @flow

export type CustomTransitionStyles = {
    entering: { [key:string]: number },
    entered:  { [key:string]: number },
    exiting:  { [key:string]: number },
    exited:   { [key:string]: number }
}

export type AnimationStyleObject = {
    defaultStyle: {
        transition:string,
        [key:string]:number
    },
    transitionStyles:CustomTransitionStyles,
    duration:number
}

export type AnimationName = "fade"

export const animationBuilder = 
    (animName:AnimationName, customTransitionStyles?:CustomTransitionStyles):function => 
        (duration:number):AnimationStyleObject => {

            switch (animName) {
                case "fade":
                    return {
                        defaultStyle: {
                            transition: `opacity ${duration}ms ease-in-out`,
                            opacity: 1
                        },
                        transitionStyles: 
                        customTransitionStyles || 
                        {
                            entering: { opacity: 1 },
                            entered:  { opacity: 1 },
                            exiting:  { opacity: 0 },
                            exited:   { opacity: 0 }
                        },
                        duration
                    }


                default:
                    return {
                        defaultStyle: {
                            transition: `opacity ${duration}ms ease-in-out`,
                            opacity: 1
                        },
                        transitionStyles: 
                        customTransitionStyles || 
                        {
                            entering: { opacity: 1 },
                            entered:  { opacity: 1 },
                            exiting:  { opacity: 0 },
                            exited:   { opacity: 0 }
                        },
                        duration
                    }

            }
        }
