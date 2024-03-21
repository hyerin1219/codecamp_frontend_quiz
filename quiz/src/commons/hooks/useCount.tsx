import { useState } from "react"

export const useCount = () => {
    const [count, setCount] = useState(0)

    const onClickButton = ():void => {
        setCount((prev) => prev+1)
    }
    

    return {
        count,
        onClickButton
    }
}