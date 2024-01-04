import { useState } from "react"

export default function loginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
    const [passwordCheck, setPasswordCheck ] = useState("")
    const [ error , setError ] = useState("")
    const [ error02 , setError02 ] = useState("")

    function emailCheck(event) {
        setEmail(event.target.value)
    }


    function pasCheck(event) {
        setPassword(event.target.value)
    }

    function pasCheck2(event) {
        setPasswordCheck(event.target.value)
    }


    function signUp(event) {

        if(email.includes("@") === false ) {
            setError("올바른 이메일 형식이 아닙니다.")
        } else {
            setError("")
        }

        if(password !== passwordCheck ) {
            setError02("비밀번호와 비밀번호 확인이 다릅니다.")
        } else {
            setError02("")
        }

        if (email.includes("@") === true && password === passwordCheck) {
            setError("")
            setError02("")

            

            setTimeout(() => {
                alert("가입을 축하합니다!")
            }, 500);
        }
    }

    



    return (
        <div>
            이메일:<input type="text" onChange={emailCheck}/>
            <div>{error}</div>
            비밀번호:<input type="text" onChange={pasCheck}/>
            <div>{error02}</div>
            비밀번호 확인하기:<input type="text"  onChange={pasCheck2}/>
            
            <button onClick={signUp}>가입하기</button>
        </div>
    )
}