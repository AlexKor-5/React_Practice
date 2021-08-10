import React, {Suspense} from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));


export const ReactLazyApp = () => {
    return (
        <>
            <div>React lazy</div>
            <Suspense fallback={<div>Loading ...</div>}>
                <OtherComponent/>
                <AnotherComponent/>
            </Suspense>
        </>
    );
}