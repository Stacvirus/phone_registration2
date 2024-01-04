import React, { useState } from "react";

function Display({notes, handleRemove}){
    const itemStyle = {
        fontWeight: "600",
        fontSize: "17px",
        cursor: "pointer"
    }
    function handleClick(e){
        const {id} = e.target
        handleRemove(id)
    }
    return(
        <ul>
            {
                notes.map((note, id) => <li key={id} id={id} style={itemStyle} onClick={handleClick}>{note.work}</li>)
            }
        </ul>
    )
}

function Form(props) {
    const [input, setInput] = useState()

    function handleListChange(e) {
        const { value } = e.target
        setInput(value)
        props.change(value)
    }
    function handleListSubmit(e) {
        e.preventDefault()
        props.submit(input)
        setInput("")
    }
    return (
        <form onSubmit={handleListSubmit}>
            <input
                type="text"
                onChange={handleListChange}
                value={input}
                style={inputStyles}
            />
            <button type="submit"style={btn}>Add</button>
        </form>
    )
}

function DoList() {
    const [insert, setInsert] = useState([
        { work: "Add items" }
    ])
    const [changeValue, setChangeValue] = useState("")

    function handleSubmit(value) {
        const newWork = [
            ...insert,
            { work: changeValue }
        ]
        setInsert(newWork)
        setChangeValue("")
        console.log(insert)
    }

    function handleChange(value) {
        setChangeValue(value)
    }
    function handleRemove(id){
        const newlist = insert.filter((item, index) => {
            return index.toString() !== id
        })
        setInsert(newlist)
    }
    return (
        <div style={boxStyle}>
            <h2 style={heading}>To-Do-List</h2>
            <Form submit={handleSubmit} change={handleChange} />
            <Display notes={insert} handleRemove={handleRemove}/>
        </div>
    )
}

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "#fff",
    alignItems: "center",
    color: "orange",
    height: "100vh",
    padding: "10px 20px"
}
const inputStyles = {
    padding: "10px",
    border: "none",
    borderBottom: "2px dotted orange",
    outline: "none",
    color: "orange",
    fontWeight: "bolder",
    fontSize: "20px"
}
const btn = {
    padding: "10px 20px",
    color: "black",
    background: "transparent",
    borderRadius: "10px",
    outline: "none",
    fontWeight: "600"
}
const heading = {
    color: "black",
    background: "orange",
    padding: "10px",
    borderRadius: "5% 15% 7% 13%",
    fontWeight: "400"
}

export default DoList