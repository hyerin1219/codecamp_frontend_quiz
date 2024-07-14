import { gql, useMutation } from "@apollo/client"
import type { IMutation, IMutationLoginUserArgs } from "../../../src/commons/types/generated/types"
import { type ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../src/commons/stores"

const LOGIN_USER = gql`
        mutation loginUser($password: String!, $email: String!) {
            loginUser(password: $password, email: $email) {
                accessToken
            }
        }
    `

export default function loginPage():JSX.Element {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [_, setAccessToken] = useRecoilState(accessTokenState)

    const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

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
    
            if(accessToken === undefined) {
                alert("로그인 먼저 해주세요!")
                return
            }
            setAccessToken(accessToken)
            // router.push(로그인 성공 페이지)
            
        } catch(error) {
            if(error instanceof Error) {
                alert(error.message)
            }
        }
    }

    return(
        <>
            <div>
                이메일: <input type="text" placeholder="이메일를 입력해 주세요." onChange={onChangeEmail} />
                비밀번호: <input type="text" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword} />
            </div>
            <button onClick={onClickLogin}>로그인</button>
        </>
    )
}