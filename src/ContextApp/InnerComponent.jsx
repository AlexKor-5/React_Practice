import React, {useContext} from "react";
import {FunctionsContext} from "./ContextApp";

export const InnerComponent = () => {
    const {sayHello, sayBye, sayGoodBye} = useContext(FunctionsContext);
    return (
        <>
            <button onClick={sayHello}>sayHello</button>
            <button onClick={sayBye}>sayBye</button>
            <button onClick={sayGoodBye}>sayGoodBye</button>
        </>
    );
}