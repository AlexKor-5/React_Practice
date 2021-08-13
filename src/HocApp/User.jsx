import React from "react";
// import withRequest from "./hocs/withRequest";
import higherOrderFunc from "./hocs/withFuncRequest"

const User = (
    {
        name = "no name",
        username = "no username",
        email = "no email",
        phone = "no phone number"
    }
) => (
    <div style={{border: "2px solid blue", padding: "15px", marginBottom: "10px"}}>
        <p><b>Name:</b>{name}</p>
        <p><b>username:</b>{username}</p>
        <p><b>email:</b>{email}</p>
        <p><b>phone:</b>{phone}</p>
    </div>
)
// export default withRequest(User, 'https://jsonplaceholder.typicode.com/users');
export default higherOrderFunc()(User, 'https://jsonplaceholder.typicode.com/users');