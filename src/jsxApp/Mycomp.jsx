import React from "react";

export const Mycomp = (props) => {
    let {name, ...other} = props;
    console.log(name);
    return (
        <>
            <SubMycomp {...other}/>
        </>
    )
};

const SubMycomp = (props) => {
    return (
        <>
            <p><b>age:</b>{props.age}</p>
            <p><b>code:</b>{props.code}</p>
        </>
    )
};

