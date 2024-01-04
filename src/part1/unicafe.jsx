import { useState } from "react";

function Button({ text, handleclick }) {
    return <button onClick={handleclick}>{text}</button>
}

function StatsLine({name, value}){
    if(name.split(",")){
        const tabnname = name.split(",");
        return(
            <tr>
                <td>{tabnname[0]}</td>
                <td>{value}{tabnname[1]} </td>
            </tr>
        )
    }
    return (
            <tr>
                <td>{name}</td>
                <td>{value}</td>
            </tr>
        )
}

function Display({stats, total}){
    if(total == 0) return;
    return(
        <table>
            <thead>
                <tr>
                    <th>statistics</th>
                </tr>
            </thead>
            <StatsLine name="good" value={stats.good}/>
            <StatsLine name="neutral" value={stats.neutral}/>
            <StatsLine name="bad" value={stats.bad}/>
            <StatsLine name="total" value={total}/>           
        </table>
    )
}

function Stats({average}){
    if(average.indexavr == 0){
        return(
            <p>No feedback given</p>
        )
    }
    return(
        <div>
            <StatsLine name="average" value={average.indexavr}/>
            <StatsLine name="positif,%" value={average.posaverage}/>                      
        </div>
    )
}

function Unicafe() {
    const [feelings, setFeelings] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState({
        indexavr:0,
        posaverage: 0
    });

    function avrCalculator(){
        const index = total / 3;
        const newAverage = {
            ...average,
            posaverage: (feelings.good / (feelings.good + feelings.neutral + feelings.bad)) * 100,
            indexavr: index
        }
        setAverage(newAverage);
    }

    function totalClicks(){
        const sum = total+1;
        setTotal(sum);
        avrCalculator();
    }

    function handleGood() {
        const sum = feelings.good + 1;
        const newFeelings = {
            ...feelings,
            good: sum
        }
        setFeelings(newFeelings);
        totalClicks();
    }

    function handleNeutral() {
        const sum = feelings.neutral + 1
        const newFeelings = {
            ...feelings,
            neutral: sum
        }
        setFeelings(newFeelings);
        totalClicks()
    }

    function handleBad() {
        const sum = feelings.bad + 1;
        const newFeelings = {
            ...feelings,
            bad: sum
        }
        setFeelings(newFeelings);
        totalClicks()
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button text={"good"} handleclick={handleGood} />
            <Button text={"neutral"} handleclick={handleNeutral} />
            <Button text={"bad"} handleclick={handleBad} />
            <Display stats={feelings} total={total}/>
            <Stats average={average}/>
        </div>
    )
}

export default Unicafe;