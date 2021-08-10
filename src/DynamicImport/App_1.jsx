import React from "react";

export const AppOne = () => {
    let changeable = true;
    // console.log(changeable);

    try {
        if (!changeable) {
            //false
            import('./functions.jsx')
                .then(elem => elem.falseMessage())
                .then(elem => console.log(elem))
                .catch(console.error);
        } else {
            //true
            import('./functions.jsx')
                .then(elem => elem.trueMessage())
                .then(elem => {
                    return (
                        <>
                            <div>App_1 text</div>
                            {elem}
                        </>
                    );
                })
                .catch(console.error);
        }
    } catch (e) {
        console.log(e);
        if (e)
            throw new Error(e);

        return (
            <>
                <div>App_1 text</div>
                <p>Error</p>
            </>
        );
    }
    return (
        <>
            <div>App_1 text</div>
            <p>Default return</p>
        </>
    );
}