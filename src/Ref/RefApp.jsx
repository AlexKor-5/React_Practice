import React, {useRef} from "react";

export const RefApp = () => {
    const ref = useRef(null);
    // console.log(reff.current);
    return (
        <>
            <p>ref EEEE</p>
            {/*<MyButton ref={ref}>Send smth!</MyButton>*/}
            {/*<MyButton>Another one</MyButton>*/}
            <MyP reff={ref}/>
        </>
    )
};

// const MyButton = (props) => (
//     <button ref={props.ref}
//             onClick={() => console.log(props.ref.current)}
//             style={{backgroundColor: "darkblue", color: "white", padding: "10px 30px"}}>{props.children}</button>
// );

const MyP = (props) => (
    <p ref={props.reff}
       onClick={() => console.log(props.reff.current)}
       style={{backgroundColor: "darkblue", color: "white", padding: "10px 30px"}}>rerererer</p>
);

// const MyButton = React.forwardRef((props, ref) => (
//     <button ref={ref}
//             onClick={() => console.log(ref.current)}
//             style={{backgroundColor: "darkblue", color: "white", padding: "10px 30px"}}>{props.children}</button>
// ))

