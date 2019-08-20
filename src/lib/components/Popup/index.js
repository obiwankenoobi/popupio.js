import React, { Node } from 'react';
import ReactDOM from "react-dom"
import { animationBuilder } from "../utils/animationBuilder"
import { AnimatedComponent, Card } from "../Card"
import "../../bootstrap.css";

type PopupProps = {
    title:string | () => Node,
    body:string | () => Node,
    button:string | () => Node,
    onButtonClick: () => {},
    customContainerStyle?:Object,
    customHeaderStyle?:Object,
    customButtonStyle?:Object,
    customButtonContainerStyle?:Object,
    customBodyContainerStyle?:Object,
    customBodyStyle?:Object,
    customButtonContainerStyle?:Object,
    isShow:boolean,
    bodyClick?:() => {},
    Component:Node,

}


const PopupAnimated = (props:PopupProps) => {

    const { 
        onButtonClick, 
        title, 
        button,
        body, 
        customContainerStyle,
        customHeaderStyle,
        customButtonStyle ,
        customBodyContainerStyle,
        customBodyStyle,
        customButtonContainerStyle,
        isShow,
        bodyClick,
    } = props;

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);

    return (
        <AnimatedComponent
            isShow={isShow}
            bodyClick={bodyClick}
            animationObj={fade}
            Component={() =>
                <Card 
                    isPopup={true}
    
                    onClick={onButtonClick}
                    title={title}
                    body={body}
                    button={button}
                    customContainerStyle={customContainerStyle}
                    customBodyContainerStyle={customBodyContainerStyle}
                    customHeaderStyle={customHeaderStyle}
                    customButtonStyle={customButtonStyle}
                    customBodyStyle={customBodyStyle}
                    customButtonContainerStyle={customButtonContainerStyle}
            />
            }
        />
    )

}

PopupAnimated.defaultProps = {
    customContainerStyle: {
        //width:"50%",
        // height:"100%"
    },
    customHeaderStyle: {

    },
    customButtonStyle: {

    } ,
    customBodyStyle: {
        //backgroundColor:"blue"
    },
    customButtonContainerStyle: {

    },
} 


function renderPopup(id:string, config:PopupProps) {

    if (!id)    
        throw new Error("Please set the first argument with the id of an element in the DOM");

    const element = document.getElementById(id);

    if (!element) 
        throw new Error(`No DOM element with id "${id}`)

    const { 
        
        onButtonClick, 
        title, 
        button,
        body, 
        customContainerStyle,
        customHeaderStyle,
        customButtonStyle ,
        customBodyContainerStyle ,
        customBodyStyle,
        customButtonContainerStyle,
        isShow,
        bodyClick,
    } = config;

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);




    ReactDOM.render( 
        <AnimatedComponent
            isShow={isShow}
            bodyClick={() => {
                bodyClick();
                const nextIsShow = !isShow;
                const nextConfig = {...config}
                nextConfig.isShow = nextIsShow;
                renderPopup(id, nextConfig);
            }}
            animationObj={fade}
            
            Component={() =>
                <Card 
                    isPopup={true}
                    
                    onClick={onButtonClick}
                    title={title}
                    body={body}
                    button={button}
                    customContainerStyle={customContainerStyle}
                    customBodyContainerStyle={customBodyContainerStyle}
                    customHeaderStyle={customHeaderStyle}
                    customButtonStyle={customButtonStyle}
                    customBodyStyle={customBodyStyle}
                    customButtonContainerStyle={customButtonContainerStyle}
                />
            }
        />
        ,element
    )

}

export  {PopupAnimated, renderPopup};