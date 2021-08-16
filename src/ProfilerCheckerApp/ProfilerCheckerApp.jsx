import React, {useState} from "react";

export const ProfilerCheckerApp = () => {
    const [counterValue, setCounterValue] = useState(0);

    const increase = () => setCounterValue(counterValue + 1);
    const decrease = () => setCounterValue(counterValue - 1);

    return (
        <>
            <Counter increase={increase} decrease={decrease} value={counterValue}/>
        </>
    )
}

const extraFunc = (value) => {
    console.log("ex func works");
    return "value is: " + value;
}

const Counter = ({increase = f => f, decrease = f => f, value = 0}) => {

    let my_value = extraFunc(value);

    return (
        <div>
            <button onClick={increase}>+</button>
            <span style={{padding: "10px"}}>{my_value}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}


// const [printText] = useState("");

// const extraFunc = (value) => {
//     console.log("ex func works");
//     return "value is: " + value;
// }

// const extraFunc = useCallback(() => {
//     console.log("ex func works");
//     return "value is: " + value;
// }, []);
