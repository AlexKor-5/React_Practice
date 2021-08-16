import React, {useRef, useState} from "react";
import ReactDOM from "react-dom";
import {v4 as uuidv4} from 'uuid';

export const PortalApp = () => {
    const [children, setChildren] = useState([]);
    const takerIn = useRef(null);

    return (
        <>
            <div className={"block"}>
                <BlockTop takerIn={takerIn} setChildren={setChildren} children={children}/>
                <BlockCenter/>
                <BlockBottom takerIn={takerIn}/>
            </div>
        </>
    )
}

const BlockTop = ({takerIn = null, setChildren = f => f, children = []}) => {
    const adding = () => {
        const adderValue = <div key={uuidv4()}>Add info text</div>;
        if (takerIn.current === null) return
        setChildren([
            ...children,
            adderValue
        ])
        console.log("createPortal works");
    }

    const inserting = (takerIn, children) => {
        if (takerIn.current === null) return
        return ReactDOM.createPortal(children, takerIn.current);
    }

    return (
        <div className={"block__top"}>
            <div className="block__child" onClick={adding} style={{
                cursor: "pointer",
                border: "1px solid red"
            }}>Click on me
            </div>
            {inserting(takerIn, children)}
        </div>
    )
}

const BlockCenter = () => {
    return (
        <div className={"block__center"}>
            <p>text_p</p>
        </div>
    )
}

const BlockBottom = ({takerIn = null}) => {
    return (
        <div className={"block__bottom"} ref={takerIn}>
            <p>empty target block</p>
        </div>
    )
}

