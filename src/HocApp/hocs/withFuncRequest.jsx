import React, {useState} from "react";

const higherOrderFunc = () => {
    console.log("higher Order Func body");

    return (Component, url) => {
        return () => {
            const [data, setData] = useState([]);

            fetch(url)
                .then(response => response.json())
                .then(json => setData(json))
                .catch(e => console.error(e));

            return (
                <>
                    {data.map((item) => {
                        return <Component key={item.id} {...item}/>
                    })}
                </>
            )
        }
    }
}

export default higherOrderFunc;