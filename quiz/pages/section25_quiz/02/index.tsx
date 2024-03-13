import  { type ChangeEvent, useState } from "react"

export default function DatePage():JSX.Element {

    // const [year, setYear] = useState("")
    // const [month, setMonth] = useState("")
    const [day, setDay] = useState("")

    const onChangeDate = (event:ChangeEvent<HTMLInputElement>):void => {
        setDay(event?.target.value)
        console.log(event?.target.value)
    }

    return(
        <>
            <input type="text" placeholder="날짜를 입력해 주세요." onChange={onChangeDate}/>
            <div>
                {day.replaceAll(day, `${day.substring(0,4)}.${day.substring(4,6)}.${day.substring(6,8)}`)}
            </div>
        </>
    )
}