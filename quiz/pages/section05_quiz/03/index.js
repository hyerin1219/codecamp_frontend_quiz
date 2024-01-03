import { useState } from "react"

export default function numberPage() {

    // const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")

    // function changeNum() {
    //     document.getElementById("number").innerText = token
    // }

    const [ token, setToken ] = useState("000000")

    function changeNum() {
        setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
    }


    return (
        <div>
            <div>{token}</div>
            <button onClick={changeNum}>인증번호전송</button>
        </div>
    )
}