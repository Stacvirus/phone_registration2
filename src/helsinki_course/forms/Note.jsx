function Note({note}){
    return  note.important && <li>{note.content}</li>
}

export default Note;