import { useState } from "react"


export default function Presenter(props:any):JSX.Element {
    const [state, setState] = useState(0)

    setState(qwer => qwer + 1)
    return <></>
}