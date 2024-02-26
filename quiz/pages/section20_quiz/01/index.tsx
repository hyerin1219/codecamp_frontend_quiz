import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function IsChangePage():JSX.Element {

    const [isChange, setIsChange] = useState(false)
    const router = useRouter()

    useEffect(() => {
        alert("Rendered!")
        return() => {
            alert("Changed!!")
            alert("Bye!")
        }
    }, [isChange])

    const onClickChange = ():void => {
        setIsChange(true)
    }

    const onClickMove = ():void => {
        void router.push("/")
    }

    return (
        <div>
            <button onClick={onClickChange}>변경</button>
            <button onClick={onClickMove}>이동</button>
        </div>
    )
}