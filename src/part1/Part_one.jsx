import React from "react";


const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]



function Course() {
    return (
        <div>
            {
                courses.map((chapter, id) => {
                    const total = chapter.parts.map(part => part.exercises);
                    return (
                        < div key={id}>
                            <h1>{chapter.name}</h1>
                            <ul>
                                {chapter.parts.map((part, id) => <li key={id}>{part.name} {part.exercises}</li>)}
                            </ul>
                            <p>Total of {total.reduce((acc, num) => acc + num)} execises</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Course;  