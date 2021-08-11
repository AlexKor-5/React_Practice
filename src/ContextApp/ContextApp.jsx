import React from "react";
import {InnerComponent} from "./InnerComponent";

export const FunctionsContext = React.createContext([]);

export const ContextApp = () => {

    const sayHello = () => console.log('hello');
    const sayBye = () => console.log('bye');
    const sayGoodBye = () => console.log('GoodBye');

    return (
        <>
            <div>React Context</div>
            <FunctionsContext.Provider value={[sayHello, sayBye, sayGoodBye]}>
                <InnerComponent/>
            </FunctionsContext.Provider>
        </>
    );
}