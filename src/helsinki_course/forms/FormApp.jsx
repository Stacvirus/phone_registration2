import React from "react";
import { useState } from "react";
import Note from "./Note";

function FormApp(props){
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("a new note")

    function addNotes(e){
        e.preventDefault();
        const newObject = {
            content: newNote,
            important: Math.random != 1
        }
        setNotes(notes.concat(newObject))
        setNewNote("")
        console.log(notes)
    }

    function handleNoteChange(e){
        setNewNote(e.target.value);
    }

    return(
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note, id) => <Note note={note} key={id}/>)}
            </ul>
            <form onSubmit={addNotes}>
                <input type="text" value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>
        </div>        
    )
}

export default FormApp;