import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {ContextApp} from "./ContextApp/ContextApp";
// import {ReactLazyApp} from "./ReactLazy/ReactLazyApp";
// import {AppOne} from "./DynamicImport/App_1";
// import {AppTwo} from "./DynamicImport/App_2";

let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        {/*<h1>Hello</h1>*/}
        {/*<AppOne/>*/}
        {/*<AppTwo/>*/}
        {/*<ReactLazyApp/>*/}
        <ContextApp/>
    </div>,
    destination
);