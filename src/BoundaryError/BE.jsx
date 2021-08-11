import React, {Suspense} from "react";
import {ErrorBoundary} from "./ErrorBoundary";

const MyOtherComponent = React.lazy(() => import("./MyOtherComponent"));

export const BE = () => {
    return (
        <>
            <p>EEEE</p>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading ...</div>}>
                    <MyOtherComponent/>
                </Suspense>
            </ErrorBoundary>
        </>
    )
}