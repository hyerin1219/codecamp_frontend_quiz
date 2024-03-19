import { useRouter } from "next/router"
import { useEffect } from "react"

export const loginCheck = (LoginComponent: any) => (loginProps: any) => {

    const router = useRouter()

    useEffect(() => {
        if(localStorage.getItem("accessToken") === null ) {
            alert("로그인 후 이용 가능합니다.")
            void router.push("/section26_quiz/02/02-02/login")
        }
    }, [])

    return <LoginComponent {...loginProps} />
}