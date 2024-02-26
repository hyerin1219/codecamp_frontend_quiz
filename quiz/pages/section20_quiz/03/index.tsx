import axios from "axios"
import { useEffect, useState } from "react"

export default function OpenApiPage():JSX.Element {
    
    const [dog, setDog] = useState("")

    useEffect(() => {
        const openApi = async (): Promise<void> => {
            const result = await axios.get("https://dog.ceo/dog-api/")
            setDog(result.data.message)
        }
        void openApi()
    })

    return (
        <>
            <img src={dog} />
        </>
    )
}