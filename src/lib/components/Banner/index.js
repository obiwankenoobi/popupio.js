// @flow
import React, { } from 'react';
import type { Node } from "react"
import Animate from "../Animate/index"
import ReactDOM from "react-dom"
import "../../bootstrap.css";
import "../style.css";
import { animationBuilder } from "../utils/animationBuilder"



type BannerProps = {
    customStyle?:Object,
    isCanelable:boolean,
    children:Node,
    isShow:boolean,
    bodyClick?:() => {},
    text:Node | string
}

const Banner = (props:BannerProps) => {
    const { 
        customStyle, 
        isCanelable, 
        isShow,
        bodyClick,
        text
     } = props;

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);

    const style = {
        backgroundColor:"red",
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }


    return (
        <Animate 
            isShow={isShow}
            bodyClick={bodyClick}
            animationObj={fade}
            isCanelable={isCanelable}
            isCard={true}
            Component={() =>
                <div className="shadow" style={{...style, ...customStyle}}>
                    {
                        typeof text === "string" ? 
                        <p 
                            style={{color:"#fff", marginTop:15 }} 
                            className="pacifico">{text}
                        </p> : 
                        text
                    }
                </div>
            }
        >
        </Animate>
    )
}

Banner.defaultProps = {
    isCanelable:true
}

function renderBanner(id:string, config:BannerProps) {

    if (!id)    
        throw new Error("Please set the first argument with the id of an element in the DOM");

    const element = document.getElementById(id);

    if (!element) 
        throw new Error(`No DOM element with id "${id}`)


    const { 
        customStyle, 
        isCanelable, 
        isShow,
        bodyClick,
        text
     } = config;

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);

    const style = {
        backgroundColor:"red",
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }


    ReactDOM.render(
        <Animate 
            isShow={isShow}
            bodyClick={() => {
                if (typeof bodyClick === "function") bodyClick();
                const nextIsShow = !isShow;
                const nextConfig = {...config}
                nextConfig.isShow = nextIsShow;
                renderBanner(id, nextConfig);
            }}
            animationObj={fade}
            isCanelable={isCanelable}
            isCard={true}
            Component={() =>
                <div className="shadow" style={{...style, ...customStyle}}>
                    {
                        typeof text === "string" ? 
                        <p 
                            style={{color:"#fff", marginTop:15 }} 
                            className="pacifico">{text}
                        </p> : 
                        text
                    }
                </div>
            }/>,
            element
    )
    
}


export {Banner, renderBanner};