import React from "react";

export const CompApp = () => {
    const person = {
        name: "Mike",
        surname: "Jophrich",
        code: "467"
    }

    const target = <>
        <p><b>name:</b>{person.name}</p>
        <p><b>surname:</b>{person.surname}</p>
        <p><b>code:</b>{person.code}</p>
    </>

    return (
        <>
            <h1>Comp App</h1>
            <Page target={target}/>
        </>
    )
}

const Page = (props) =>
    <div>
        <OneSubPage target={props.target}/>
    </div>

const OneSubPage = (props) =>
    <div>
        <TwoSubPage target={props.target}/>
    </div>

const TwoSubPage = (props) =>
    <div>
        <ThreeSubPage target={props.target}/>
    </div>

const ThreeSubPage = (props) =>
    <div>
        {props.target}
    </div>