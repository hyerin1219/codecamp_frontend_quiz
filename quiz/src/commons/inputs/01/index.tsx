import type { UseFormRegisterReturn } from "react-hook-form"

interface IInputProps {
    type?: "text" | "password",
    register: UseFormRegisterReturn
    conTitle: string
    error: any
}

export default function Input01(props:IInputProps):JSX.Element {
    return (
        <>
            <span style={{display: "inline-block", width: "90px"}}> {props.conTitle} :</span>
            <input type={props.type ?? "text"} {...props.register}  />
            <div style={{height: "20px", color: "red" }}>{props.error}</div>
        </>
    )
}