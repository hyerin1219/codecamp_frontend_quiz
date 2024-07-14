import { UseAuth } from "../../../../src/commons/hooks/useAuth"

export default function MainPage():JSX.Element {
    UseAuth()

    return (
        <>
            <div>메인페이지 입니다!</div>
        </>
    )
}