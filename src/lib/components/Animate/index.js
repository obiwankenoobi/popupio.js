import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import "../../bootstrap.css";
import { isS } from 'xmlchars/xml/1.0/ed5';

type AnimateProps = {
    Component:() => Node,
    isCanelable:boolean,
    animationObj:AnimationStyleObject,
    isCard?:boolean,
    isShow:boolean,
    bodyClick?:() => {},
    deley?:number
}   



const Animate = (props:AnimateProps) => {

    const {
        animationObj: {
            duration , 
            defaultStyle, 
            transitionStyles
        }, 
        isCard, 
        deley,
        isShow,
        bodyClick,
        isCanelable
    } = props;
    const [isRender, setRender] = useState(isShow);
    const [isAnimate, setAnimate] = useState(isShow);

    useEffect(() => {
        if (isShow === true) {
            setRender(true);
            setTimeout(setAnimate, duration, true);
        } else {
            setAnimate(false);
            setTimeout(setRender, duration, false);
        }
    },[isShow]);

    const classStyle = isCard ? "fixed top" : "fixed bottom"

    return (
        <div>
            {
                isRender &&
                <Transition in={isAnimate} timeout={duration}>
                {
                    state => 
                        <div 
                            className={classStyle}
                            onClick={e => {
                                bodyClick && bodyClick();
                                e.stopPropagation();
                            }} 
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                                width:"100%"
                            }}>
                            <props.Component/>
                        </div>
                }         
                </Transition>
            }
        </div>

    )
};

Animate.defaultProps = {
    deley:0
}  

export default Animate;