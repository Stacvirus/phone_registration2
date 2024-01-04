import React from "react";
import { useState } from "react";

function Time() {
    const [time, setTime] = useState("Time")
    
    function handleTime(){        
        setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            setTime(currentTime);
        }, 1000);
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={handleTime}>Current Time</button>
        </div>
    )
}

export default Time;