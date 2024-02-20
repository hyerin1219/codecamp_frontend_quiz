import { useMutation } from "@apollo/client";
import CommentWriteUI from "./comment.write.presenter";
import {CREATE_BOARD_COMMENT} from './comment.write.queries'
import { useState } from "react";

export default function CommentWrite():JSX.Element {

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

    const [inputs, setInputs] = useState({
        writer: "",
        password: "",
        contents: ""
    })

    const onChangeInputs = (event:any):void => {
        setInputs((prev) => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }

    const onClickSubmit = async ():Promise<void> => {
        const result = await createBoardComment({
            variables: { 
                boardId: "65d45c8e5d6eaa0029f7dfc0",
                createBoardCommentInput: {
                    ...inputs,
                    rating: 0
                }
            }
        })
        console.log(result)
    }
    

    return (
        <>
            <CommentWriteUI
                onClickSubmit={onClickSubmit}
                onChangeInputs={onChangeInputs}
                inputs={inputs}
            />
        </>
    )
}