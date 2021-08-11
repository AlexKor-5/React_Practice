import React from "react";

export const CompApp = () => {
    const person = {
        name: "Mike",
        surname: "Jophrich",
        code: "467"
    }
    return (
        <>
            <h1>Comp App</h1>
            <Page {...person}/>
        </>
    )
}

const Page = () =>
    <div>
        <OneSubPage/>
    </div>

const OneSubPage = () =>
    <div>
        <TwoSubPage/>
    </div>

const TwoSubPage = () =>
    <div>
        <ThreeSubPage/>
    </div>

const ThreeSubPage = () =>
    <div>
        <TargetPage/>
    </div>

const TargetPage = ({name, surname, code}) => {
    return (
        <>
            <p><b>name:</b>{name}</p>
            <p><b>surname:</b>{surname}</p>
            <p><b>code:</b>{code}</p>
        </>
    )
}
