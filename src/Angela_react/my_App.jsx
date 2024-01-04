import React from "react";
import Form from "./form_project/Form";
import Register from "./form_project/Register";

const formStyles = {
    display: "inline-flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-around",
    alignItems: 'center',
    borderRadius: "10px",
    padding: "25px",
    background: "rgb(32, 144, 172)",
    height: "100vh"
}
const islogIn = false;
const isRegistered = true;
function MyApp(){
    return (
        <div style={formStyles}>
            {
                <Form info={isRegistered}/>
            }
        </div>
    )
}

export default MyApp;