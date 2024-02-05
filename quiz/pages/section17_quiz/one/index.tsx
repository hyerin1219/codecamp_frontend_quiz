import { useRouter } from "next/router"


export default function onePage():JSX.Element {

    const router = useRouter()

    console.log(router.asPath)

    return (
        <div>{router.asPath}영역 입니다.</div>
    )
}