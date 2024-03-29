import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyComponent():JSX.Element {

    const  [count, setCount] = useState(0)
    const router = useRouter()

    useEffect(() => {
        console.log("컴포넌트가 마운트됐습니다~");
        console.log("컴포넌트가 변경됐습니다~");
        return() => {
            alert("컴포넌트가 제거됩니다~");
        }
    })



    const onClickButton = ():void => {
        setCount((prev) => prev + 1);
    };

    const onClickMove = ():void => {
        void router.push("/")
    }

    return (
        <> 
            < div > 카운트 : {count}</div> 
            < button onClick = {onClickButton} > 카운트(+ 1)</button> 
            < button onClick = {onClickMove} > 이동하기</button> 
        </>
    )
}