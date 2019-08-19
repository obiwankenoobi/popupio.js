import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import _ from "lodash" 
import { animationBuilder } from "../utils/animationBuilder"
import Animate from "../Animate/index"
import "../../bootstrap.css";


type CardProps = {
    title:string | () => Node,
    body:string | () => Node,
    button:string | () => Node,
    onClick: () => {},
    customContainerStyle?:Object,
    customHeaderStyle?:Object,
    customButtonStyle?:Object,
    customBodyStyle?:Object,
    customBodyContainerStyle?:Object,
    customButtonContainerStyle?:Object,
    isPopup?:boolean
}



export const Card = (props:CardProps) => {

    let clonedButton;

    const { 
        title, 
        body, 
        button,
        onClick,
        customContainerStyle,
        customHeaderStyle,
        customButtonStyle,
        customBodyStyle,
        customBodyContainerStyle,
        customButtonContainerStyle,
        isPopup
     } = props;

     const cardRef = useRef();
     const [bottomPercent, setBottomPercent] = useState(0);


     // prevent covering "powered by popupio.com"
     if (typeof button === "object") {
        clonedButton = _.cloneDeep(button);
        clonedButton.props.style = {...button.props.style, zIndex:-1}
     }

     if (typeof button !== "string" && onClick) 
        throw new Error(
            `You can't have 'onClick' function and custom component for the 'button'
            Plese pass the 'onClick' callback through your custom component:
            button={
                () => <button onClick={yourCallback}></button>
            }

            Or pass 'string' as the button and a callback in 'onButtonClick'`
        )

    const generalStyle = {
        width:"100%",
        display:"flex",
        justifyContent:"cetner",
        alignItems:"center",
        margin:"0px",
    }

    const containerStyle = {
        // height:"100px",
        backgroundColor:"white",
        borderRadius:"10px",
        margin:"0px",
        padding:"0px",
        marginLeft:"0px",
        marginRight:"0px",
        bottom:0,
    }

    const headerStyle = {
        //height:"20%",
        padding:"15px",
        paddingTop:"20px",
        backgroundColor:"#2A2E3D",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
        paddingLeft:"20px",
        paddingRight:"20px",
        color:"white",
        margin:"auto 0",
        borderWidth:0
        // paddingVertical:"15px",
        // paddingTop:"15px"
    }

    const buttonStyle = {
        borderWidth:0,
        borderRadius:"5px",
        height:"50px",
        margin:"auto",
        backgroundColor:"red",
        color:"white",
        width:"100%"
    }

    const buttonContainerStyle = {
        width:"100%",
        margin:"0px",
        paddingLeft:"0px",
        paddingRight:"0px",
        padding:"15px"
    }

    const bodyContainerStyle = {
        padding:"20px"
    }

    const customSlass = 
        isPopup ? 
        "fixed shadow center-popup card-container popup" : 
        "fixed shadow bottom card-container left";
    
    return (
        <Container 
            ref={cardRef}  
            className={customSlass} 
            style={{
                ...containerStyle, 
                ...customContainerStyle, 
            }}>
        {
            <div>
                <Row className="card-header" style={{...headerStyle, ...generalStyle, ...customHeaderStyle}}>
                
                    {
                        typeof title === "object" ? 
                        title : 
                        <h5 className="pacifico">
                            {title}
                        </h5>
                    }
                
                </Row>

                <Row style={{...generalStyle,  ...bodyContainerStyle ,...customBodyContainerStyle}}>
                    
                    {
                        typeof body === "object" ? 
                        body : 
                        <p style={{color:"black" ,...customBodyStyle}}>
                            {body}
                        </p> 
                    }
                    
                </Row>

                <Row className="card-button" style={{...buttonContainerStyle, ...customButtonContainerStyle}}>
                {
                    
                    typeof button === "object" ? 
                    clonedButton :
                    <button onClick={e => {e.stopPropagation(); onClick();}} className="shadow pacifico" style={{...buttonStyle, ...customButtonStyle}}>
                        {button}
                    </button>        
                }
                </Row>

                <div
                    className="poweredby"
                    onClick={e => e.stopPropagation()}
                    style={{
                        paddingLeft:"20px",
                        fontSize:12,
                        color:"#BFBFBF",
                        paddingTop:"10px",                    
                }}>
                    <p  >Powered by <a rel="noopener noreferrer" target="_blank" href="https://popupio.netlify.com">popupio.com</a></p>
                </div>
            </div>
        }
        </Container>

    )
}



export type AnimatedComponentProps = {
    isCanelable:boolean,
    isShow:boolean,
    bodyClick?:() => {},
    Component:Node
}

export const AnimatedComponent = (props:AnimateCardProps) => {
    const { 
        isCanelable, 
        isShow,
        bodyClick,
        Component
    } = props;

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);

    return (
        <Animate 
            isShow={isShow}
            bodyClick={bodyClick}
            animationObj={fade}
            isCanelable={isCanelable}
            Component={Component}
        />

    )
}


type AnimatedCardProps = {
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
    isCanelable:boolean,
    isShow:boolean,
    bodyClick?:() => {},
    Component:Node
}

const AnimatedCard = (props:AnimatedCardProps) => {

    const { 
        isCanelable, 
        onButtonClick, 
        title, 
        button,
        body, 
        customContainerStyle,
        customHeaderStyle,
        customButtonStyle ,
        customBodyStyle,
        customBodyContainerStyle,
        customButtonContainerStyle,
        isShow,
        bodyClick
    } = props;

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);
    
    return (
        <AnimatedComponent
            isShow={isShow}
            bodyClick={bodyClick}
            animationObj={fade}
            isCanelable={isCanelable}
            Component={() => 
                <Card 
                    isCanelable={isCanelable}
                    onClick={onButtonClick}
                    title={title}
                    body={body}
                    button={button}
                    customContainerStyle={customContainerStyle}
                    customHeaderStyle={customHeaderStyle}
                    customButtonStyle={customButtonStyle}
                    customBodyContainerStyle={customBodyContainerStyle}
                    customBodyStyle={customBodyStyle}
                    customButtonContainerStyle={customButtonContainerStyle}
                />
            }
        />
        )
}


function renderCard(id:string, config:AnimatedCardProps) {

    if (!id)    
        throw new Error("Please set the first argument with the id of an element in the DOM");

    const element = document.getElementById(id);

    if (!element) 
        throw new Error(`No DOM element with id "${id}"`)

    const fadeAnimation = animationBuilder("fade");
    const fade = fadeAnimation(300);
    
    const {
        isCanelable, 
        onButtonClick, 
        title, 
        button,
        body, 
        customContainerStyle,
        customHeaderStyle,
        customButtonStyle ,
        customBodyStyle,
        customButtonContainerStyle,
        customBodyContainerStyle,
        isShow,
        bodyClick
    } = config;


    ReactDOM.render(
        <AnimatedComponent
            isShow={isShow}
            bodyClick={() => {
                    if (typeof bodyClick === "function") bodyClick();
                    const nextIsShow = !isShow;
                    const nextConfig = {...config}
                    nextConfig.isShow = nextIsShow;
                    renderCard(id, nextConfig);
                }
            }
            animationObj={fade}
            isCanelable={isCanelable}
            Component={() => 
                <Card 
                    isCanelable={isCanelable}
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
        />,
        element
    )
}

export { AnimatedCard, renderCard };