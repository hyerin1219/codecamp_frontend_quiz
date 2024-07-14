import { useState } from "react"

interface IUSeCountReturn {
    count: any
    onClickButton: () => void
}

export const useCount = (): IUSeCountReturn => {
    const [count, setCount] = useState(0)

    const onClickButton = ():void => {
        setCount((prev) => prev+1)
    }
    

    return {
        count,
        onClickButton
    }
}