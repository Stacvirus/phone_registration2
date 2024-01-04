import React, { useState } from "react";

const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "10px"
}
const elements = {
    padding: "15px",
    borderRadius: "5px",
    outline: "none"
}


function FormMouse() {
    const [sheet, setSheet] = useState(false)
    const [name, setName] = useState({fName: "", lName: "", email: ""})

    const btn = {
        background: sheet ? "#fff" : "black",
        color: sheet ? "rgb(32, 144, 172)" : "#fff",
        padding: "15px",
        borderRadius: "5px",
        outline: "none",
        border: "0px",
        fontWeight: "bold",
        cursor: "pointer"
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleOUt() {
        setSheet(false)
    }
    function handleOver() {
        setSheet(true)
    }
    function handleChange(e){
        const {value, name} = e.target;      
        setName(newAns => ({...newAns, [name]: value}));
    }

    const inputs = [
        {
            type: "text",
            text: "first name",
            handle: handleChange,
            name: "fName",
            fName: name.fName
        },
        {
            type: "text",
            text: "last name",
            handle: handleChange,
            name: "lName",
            fName: name.lName
        },
        {
            type: "email",
            text: "Email",
            handle: handleChange,
            name: "email",
            fName: name.email
        },
    ]
    return (
        <div>
            <h1>welcome {name.fName} {name.lName}</h1>
            <p>{name.email}</p>
            <form style={formStyle} onSubmit={handleSubmit} >
                
                {
                    inputs.map((note, id) => {
                        return(
                            <input 
                                type={note.type}
                                placeholder={note.text}
                                name={note.name}
                                value={note.fName}
                                onChange={note.handle}
                                key={id}
                                style={elements}
                            />
                        )
                    })
                }
                <button type="submit" style={btn} onMouseOut={handleOUt} onMouseOver={handleOver}>Submit</button>
            </form>
        </div>
    )
}

export default FormMouse;