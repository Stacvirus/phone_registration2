import React from "react";

const explains = [
    {
        num: "One",
        title: "Tense Biseps",
        body: "you can do that or I feel strong, Arms with tense biseps alse use in connertion of doing sport. e.g at the gym."
    },
    {
        num: "Two",
        title: "Person with folded Arms",
        body: "two hands pressed together is currently very introverte, saying a prayer or hoping for enlightement. Is also use as a high five or to say thankyou."
    },
    {
        num: "Three",
        title: "Rolling on the floor, laughing",
        body: "This is funny, a smiley facen rolling on the floor laughing. The face is laughing boundlessly. The emoji version of roft stands for laughing, rolling on the floor."
    },
]

const contentStyle = {
    display: "inline-flex",
    justifyContent: "space-around",
    alignItems: "center",
}

const mainBoxStyle = {
    textAlign: "center",
    background: "lightblue",
    height: "100vh",
    padding: "40px"
}

const head = {
    backgroundColor: "aqua",
    color: "#fff",
    padding: "10px",
    display: "inline-block",
    marginBottom: "40px"
}

const contentChild = {
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
    width: "30%",
    background: "#fff",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}

const childTitle = {
    color: "aqua"
}

function handleString(){
    const bodies = explains.map(ans => ans.body);
    bodies.forEach(elem =>console.log(elem.substring(0, 101)));
}

function Emoji() {
    return (
        <div style={mainBoxStyle}>
            <h1 style={head}>EmojiPedia</h1>
            <button onClick={handleString}>subString</button>
            <div className="content" style={contentStyle}>
                {
                    explains.map((ans, id) => {
                        return (
                            <div key={id} style={contentChild}>
                                <h2>{ans.num}</h2>
                                <h3 style={childTitle}>{ans.title}</h3>
                                <p>{ans.body}</p>
                            </div>
                        )                        
                    })
                }
            </div>
        </div>
    )
}

export default Emoji;