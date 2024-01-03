import { useState } from "react"

export default function HelloPage() {

    // function changeBtn() {

    //     const buttonTxt = document.getElementById("bn").innerText = "반갑습니다."

    //     document.getElementById("bn").innerText = buttonTxt
    // }

    const [ word , setWord ] = useState("안녕하세요.");

    function changeBtn() {
        setWord("반갑습니다.") 
    }

    return (
        <div>
            <button onClick={changeBtn}>{word}</button>
        </div>
    )
}