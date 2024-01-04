import React from "react";

const boxStyles = {
    overflow: "hidden",
    borderRadius: "30px",
    fontFamily: "sans-serif",
    display: "inline-flex",
    flexDirection: "column",
    width: "350px"
}

const head = {
    padding: "20px",
    fontWeight: "bolder",
    fontSize: "25px",
    backgroundColor: "rgb(6, 85, 85)",
    display: "inline-block"
}
const body = {
    padding: "20px",
    color: "gray",
    backgroundColor: "aqua",
    display: "inline-block"
}

function Contact(props) {
    return (
        <div style={boxStyles}>
            <div style={head}>
                <p>{props.name}</p>
            </div>
            <div style={body}>
                <p>{props.num}</p>
                <p>{props.email}</p>
            </div>
            <img src="images/haikyu.jpg" alt="" />
        </div>
    );
}

export default Contact;