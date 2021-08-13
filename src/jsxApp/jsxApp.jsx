import React from "react";

export const JsxApp = () => {
    return (
        <>
            <MagicText.H1>ssss</MagicText.H1>
            <p>Lorem ipsum dolor sit amet.</p>
            <MagicText.P>fdfd</MagicText.P>
            <div style={{width: "200px", height: "200px", border: "2px solid red", padding: "10px"}}>
                <MagicText.SmallTextFiller/>
            </div>
        </>
    )
}

const MagicText =
    {
        H1: (props) => <h1
            style={{fontFamily: "Arial", color: "green", textDecoration: "underline"}}>{props.children}</h1>,
        P: (props) => <p
            style={{fontFamily: "Arial", color: "green", textDecoration: "underline"}}>{props.children}</p>,
        SmallTextFiller: () =>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, optio!</span>
    }