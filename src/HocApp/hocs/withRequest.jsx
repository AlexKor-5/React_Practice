import React, {useState} from "react";

const withRequest = (Component, url) => {
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
export default withRequest;


