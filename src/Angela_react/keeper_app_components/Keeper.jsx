import React, { useState } from "react";
import notes from "./Notes";

const header_styles = {
    padding: "20px 0",
    background: "orange",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 5px 7px 0 rgba(0,0,0,0.2)",
    fontFamily: "sans-serif",
    width: "100%",
    marginBottom: "20px"
}
function Header() {
    return (
        <header style={header_styles}>
            <h1>Keeper</h1>
        </header>
    )
}

const note_styles = {
    display: "inline-flex",
    padding: "20px",
    boxShadow: "0 0 7px 2px rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    margin: "20px",
    height: "200px",
    position: "relative",
    background: "#fff"
}

const paraStyles = {
    width: "200px",
    textAlign: "justify"
}

const contentStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
}

const noteBtn = {
    border: "none",
    textTransform: "uppercase",
    color: "orange",
    background: "transparent",
    position: "absolute",
    bottom: "10%",
    right: "10%",
    cursor: "pointer"
}

function Note({title, content, id, remove}){
    function handleDel(){
        remove(id)
    }
    return (
        <div style={note_styles} key={id}>
            <h3>{title}</h3>
            <p style={paraStyles}>{content}</p>
            <button style={noteBtn} onClick={handleDel}>Delete</button>
        </div>
    )
}

const footer_styles = {
    color: "#ccc",
    textAlign: "center",
    padding: "20px 0",
    width: "100%",
    fontWeight: "bold"
}
function Footer() {
    return (
        <footer style={footer_styles}>
            copyrights {new Date().getFullYear()}
        </footer>
    )
}

const AddItemStyles = {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    position: "relative",
    background: "#fff"
}
const inputTitleStyles = {
    padding: "15px",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    background: "#fff"
}

const addBtn = {
    position: "absolute",
    bottom: "-18px",
    left: "40%",
    borderRadius: "50%",
    padding: "10px",
    background: "orange",
    color: "#fff",
    border: "none",
    cursor: "pointer"
}

function AddItem({add}){
    const [val, setVal] = useState({title: "", content: ""})
    function handleSubmit(e){
        e.preventDefault();
        if(val.title == "" || val.content == "") return        
        add(val)
        setVal({title: "", content: ""})
    }
    function handleChange(e){
        const {value, name} = e.target
        const object = {
            ...val,
            [name]: value
        }
        setVal(object)
    }
    return(
        <form style={AddItemStyles} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title"
                style={inputTitleStyles}
                onChange={handleChange}
                value={val.title}
                name="title"
            />
            <textarea 
                name="content" 
                cols="30" 
                rows="10"
                placeholder="Take a note..."
                style={inputTitleStyles}
                value={val.content}
                onChange={handleChange}
            />
            <button type="submit" style={addBtn}>Add</button>
        </form>
    )
}

const keeperStyles = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%"
}
function Keeper() {
    const [newNotes, setNewNotes] = useState(notes)
    function handleAdd(addNote){
        console.log(addNote)
        setNewNotes(newNotes.concat(addNote))
    }
    function handleDelect(id){
        const object = newNotes.filter((note, index) => index != id)
        setNewNotes(object)
    }
    return (
        <div style={keeperStyles}>
            <Header />
            <AddItem add={handleAdd}/>
            <div style={contentStyle}>
                {
                    newNotes.map((note, id) => <Note title={note.title} content={note.content} id={id} key={id} remove={handleDelect}/>)
                }
            </div>
            <Footer />
        </div>
    )
}

export default Keeper;