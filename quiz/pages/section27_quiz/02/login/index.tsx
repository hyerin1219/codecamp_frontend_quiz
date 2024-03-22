import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/stores";
import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationLoginUserArgs } from "../../../../src/commons/types/generated/types";
import { type ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
    mutation loginUser($email: String!,$password: String!) {
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

export default function LoginPage():JSX.Element {

    const [ , setAccessToken ] = useRecoilState(accessTokenState)
    const [ loginUser ] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    const router = useRouter()


    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event:ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }


    const onClickLogin = async ():Promise<void> => {
        console.log("dddd")
        try {
            const result = await loginUser({
                variables: {
                    email,
                    password
                }
            })
    
            const accessToken = result.data?.loginUser.accessToken

            if(accessToken === undefined) {
                alert("로그인에 실패하였습니다")
                return
            }

            setAccessToken(accessToken)
            alert("로그인에 성공하셨습니다")
            localStorage.setItem("accessToken", accessToken)
            void router.push("/section27_quiz/02/02-02")

        } catch(error) {
            if(error instanceof Error) {
                alert(error.message)
            }
        }

    }

    return(
        <div >
            이메일 : <input type="text" onChange={onChangeEmail}/>
            비밀번호 : <input type="password" onChange={onChangePassword}/>

            <button onClick={onClickLogin}>로그인 하기</button>
        </div>
    )
}