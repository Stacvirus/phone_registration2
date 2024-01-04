import React from "react";

function Heading() {
    return <h1>My favorite things</h1>
}
function List() {
    return (
        <ul>
            <li>Boobs</li>
            <li>Animes</li>
            <li>Food</li>
        </ul>
    )
}

function One() {
    return (
        <div>
            <Heading />
            <List />
        </div>
    )
}

export default One;