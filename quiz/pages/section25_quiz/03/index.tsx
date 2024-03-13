import { useState, type  ChangeEvent } from "react"

export default function RegExpPage():JSX.Element {

    const [day, setDay] = useState("")
    const [phone, setPhone] = useState("")
    // const [email, setEmail] = useState("")

    const dateValue = (event:ChangeEvent<HTMLInputElement>):void => {
        setDay(event.target.value.replaceAll(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'))
    }

    const phoneValue = (event:ChangeEvent<HTMLInputElement>):void => {
        setPhone(event.target.value.replaceAll(/(\d{3})(\d{4})(\d{4})/g, '$1-$2-$3'))
    }

    // const emailValue = (event:ChangeEvent<HTMLInputElement>):void => {
    //     setEmail(event.target.value.replaceAll(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i, `$1@$2`))
    // }

    return(
        <>
        <div>
            날짜:
            <input type="text" placeholder="날짜를 입력해 주세요." onChange={dateValue}/>
            <div style={{height: "30px"}}>{day}</div>
        </div>

        <div style={{margin: "10px 0"}}>
            휴대폰 번호:
            <input type="text" placeholder="휴대폰 번호를 입력해 주세요."  onChange={phoneValue}/>
            <div style={{height: "30px"}}>{phone}</div>
        </div>

        {/* <div>
            이메일:
            <input type="text" placeholder="이메일을 입력해 주세요."  onChange={emailValue}/>
            <div style={{height: "30px"}}>{email}</div>
        </div> */}
        </>
    )
}