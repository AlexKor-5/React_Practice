import React, {useRef} from "react";
import ReactDOM from "react-dom";

export const PortalAppTwo = () => {
    const containerLink = useRef(null);
    return (
        <>
            <div className={"block"}>
                <div className="block__place">
                    <div className="block__real-place" ref={containerLink}>

                    </div>
                </div>
                <div className="block__place">
                    <div className="block__face-place">
                        <Boxy link={containerLink}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const Boxy = ({link = null}) => {
    if (link !== null) return ReactDOM.createPortal(
        <div style={{
            width: "200px",
            height: "200px",
            border: "2px solid black",
            padding: "5px",
            margin: "5px",
            backgroundColor: "peachpuff"
        }}>Boxy</div>
        , link.current)
    else {
        return null
    }
}
