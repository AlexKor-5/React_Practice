import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {HocApp} from "./HocApp/HocApp";
// import {BE} from "./BoundaryError/BE";
// import {RefApp} from "./Ref/RefApp";
// import {CompApp} from "./Composition/CompApp";
// import {ContextApp} from "./ContextApp/ContextApp";
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
        {/*<ContextApp/>*/}
        {/*<CompApp/>*/}
        {/*<BE/>*/}
        {/*<RefApp/>*/}
        <HocApp/>
    </div>,
    destination
);