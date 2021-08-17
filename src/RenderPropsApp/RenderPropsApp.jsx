import React from "react";


export const RenderPropsApp = () => {
    const back = "grey";
    const anotherBack = "pink";
    return (
        <>
            <ContainerOne render={() => <InnerBoxy back={back}/>}/>
            <ContainerTwo render={() => <InnerBoxy back={anotherBack}/>}/>
        </>
    )
}

const ContainerOne = ({render = f => f}) => {
    return (
        <div style={{
            width: "200px",
            height: "200px",
            border: "2px solid red",
            padding: "10px",
            margin: "10px"
        }}>{render()}</div>
    )
}

const ContainerTwo = (props) => {
    return (
        <div style={{
            width: "200px",
            height: "200px",
            border: "2px solid green",
            padding: "10px",
            margin: "10px"
        }}>{props.render()}</div>
    )
}

const InnerBoxy = ({back = "transparent"}) => {
    return (
        <div style={{
            width: "100px",
            height: "100px",
            border: "1px solid black",
            backgroundColor: back
        }}/>
    )
}