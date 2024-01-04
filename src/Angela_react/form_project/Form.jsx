import React from "react";


const props = [
    {
        type: "text",
        text: "Username"
    },
    {
        type: "password",
        text: "Password"
    }
]


const formStyles = {
    display: "inline-flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-around",
    alignItems: 'center',
    borderRadius: "10px",
    padding: "25px",
    background: "rgb(32, 144, 172)"
}

const inputStyle = {
    background: "transparent",
    padding: "15px",
    borderRadius: "10px",
    outline: "none",
    border: "1px solid #fff"
}

const loginStyles = {
    width: "100%",
    padding: "15px",
    fontWeight: "bolb",
    background: "#fff",
    color: "rgb(32, 144, 172)",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer"
}

function Input({type, text}){
    return <input type={type} placeholder={text} style={inputStyle}/>
}

function Form({info}){
    return(
        <form style={formStyles}>
            {
                props.map((prop, id) => <Input type={prop.type} text={prop.text} key={id}/>)
            }
            {info && <Input type="password" text="Confirm Password"/> }
            <button type="submit" style={loginStyles}>{info ? "Register" : "Login"}</button>
        </form>
    )
}

export default Form;