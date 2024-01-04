import { useState } from "react"

import { MainBox, MapIcon, MapTit, InputWrap, InputBox, ErrorBox, SignUpButton, WordList, Bar, KakaoBtn} from '../../../styles/section05-05.js'

export default function itsRoadPage() {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const [ error, setError ] = useState("")
    const [ error2, setError2 ] = useState("")

    function checkEmail(event) {
        setEmail(event.target.value)
    }

    function checkPassword(event) {
        setPassword(event.target.value)
    }

    function SignUp() {
        console.log("dd")
        
        if ( email.includes("@") === false ) {
            setError("이메일 주소를 다시 확인해주세요.")
        } else {
            setError("")
        }

        if ( password.length <= 8 ) {
            setError2("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        } else {
            setError2("")
        }

        if(email.includes("@") === true && password.length >= 8) {
            setError("")
            setError2("")


            setTimeout(() => {
                alert("가입을 축하합니다!")
            }, 500);
        }


    }

    return (
        <div>
            <MainBox>
                <MapIcon></MapIcon>
                <MapTit>잇츠로드</MapTit>
                <InputWrap>
                    <InputBox onChange={checkEmail}></InputBox>
                    <ErrorBox>{error}</ErrorBox>
                </InputWrap>
                <InputWrap>
                    <InputBox onChange={checkPassword}></InputBox>
                    <ErrorBox>{error2}</ErrorBox>
                </InputWrap>
                <SignUpButton onClick={SignUp}>로그인</SignUpButton>
                <WordList>
                    <p>이메일 찾기</p>
                    <Bar></Bar>
                    <p>비밀번호 찾기</p>
                    <Bar></Bar>
                    <p>회원가입</p>
                </WordList>
                <KakaoBtn>카카오톡으로 로그인</KakaoBtn>
            </MainBox>
        </div>
    )
}