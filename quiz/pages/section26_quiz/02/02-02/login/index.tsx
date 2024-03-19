import { gql, useMutation } from "@apollo/client"
import { type ChangeEvent, useState } from "react"
import { accessTokenState } from "../../../../../src/commons/stores"
import { useRecoilState } from "recoil"
import { useRouter } from "next/router"
import type { IMutation, IMutationLoginUserArgs } from "../../../../../src/commons/types/generated/types"

const LOGIN_USER = gql`
    mutation loginUser($password: String!, $email: String!) {
        loginUser (password: $password, email: $email) {
            accessToken
        }
    }
`

export default function loginPage():JSX.Element {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

    const [_, setAccessToken] = useRecoilState(accessTokenState)

    const router = useRouter()

    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const onClickLogin = async ():Promise<void> => {
        try {
            const result = await loginUser({
                variables: {
                    email,
                    password
                }
            })
            const accessToken = result.data?.loginUser.accessToken
            
    
            if (accessToken === undefined) {
                alert("로그인에 실패했습니다! 다시 시도해주세요!")
                return;
            }
            setAccessToken(accessToken)
            localStorage.setItem("accessToken", accessToken)
    
            void router.push("/section26_quiz/02/02-02/login-success")
        } catch(error) {
            if(error instanceof Error) alert(error.message)
        }
    }

    return (
        <>
            <div>
                이메일: <input onChange={onChangeEmail} type="text" placeholder="이메일을 입력해 주세요."/>
                비밀 번호: <input onChange={onChangePassword} type="text" placeholder="비밀 번호을 입력해 주세요."/>
            </div>
            <button onClick={onClickLogin}>로그인 하기</button>
        </>

    )
}