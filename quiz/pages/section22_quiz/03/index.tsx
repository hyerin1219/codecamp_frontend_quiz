import { useEffect, useRef } from "react"


export default function useRefPage():JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

        const onChangeInput = ():void => {
            inputRef?.current?.focus()
        }

        onChangeInput()

    }, [])

    return (
        <>
            비밀번호: <input type="password" ref={inputRef}  style={{margin: "10px"}}/>
        </>
    )
}