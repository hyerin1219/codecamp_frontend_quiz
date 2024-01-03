import { useState } from "react"

export default function CounterPage() {

    // function counter() {

    //     const innerNum = Number(document.getElementById("num").innerText) + 1

    //     document.getElementById("num").innerText = innerNum
    // }

    const [ num, setCount ] = useState(0)

    function counter() {
        setCount(num + 1)
    }


    return (
        <div>
            <div>{num}</div>
            <button onClick={counter}>카운트증가</button>
        </div>
    )
}