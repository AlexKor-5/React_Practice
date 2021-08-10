import React, {useState} from "react";

export const AppTwo = () => {
    const [taker, setTaker] = useState("Default return");

    setTimeout(() => {
        import('./functions.jsx')
            .then(elem => elem.trueMessage())
            .then(elem => {
                setTaker(elem);
            })
            .catch(console.error);
    }, 1000);


    return (
        <>
            <div>App_2 text</div>
            <p>{taker}</p>
        </>
    );
}