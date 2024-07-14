import { useRouter } from "next/router"
import { useEffect } from "react"

export const UseAuth = ()  => () => {

    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem("accessToken") === null) {
            alert("로그인 후 이용해 주세요!")
        }
        void router.push('/section27_quiz/02/login')
    },[])


}