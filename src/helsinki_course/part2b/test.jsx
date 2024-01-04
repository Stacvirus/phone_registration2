import React from "react";

function App({notes}){
    return(
        <ul>
            {
                notes.map((notes, id) => <li key={id}>{notes.content}</li>)
            }
        </ul>
    )
}

export default App