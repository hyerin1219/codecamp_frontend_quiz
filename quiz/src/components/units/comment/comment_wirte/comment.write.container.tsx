import { useMutation, useQuery } from "@apollo/client";
import CommentWriteUI from "./comment.write.presenter";
import {CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS} from './comment.write.queries'
import { type ChangeEvent, useState } from "react";
import CommentList from "../comment_list/comment.list.container";

export default function CommentWrite():JSX.Element {

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const {data} = useQuery(FETCH_BOARD_COMMENTS)

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [contents, setContents] = useState("")

    const onChangeWriter = (event:ChangeEvent<HTMLInputElement>):void => {
        setWriter(event.target.value)
    }
    const onChangePassword = (event:ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }
    const onChangeContents = (event:ChangeEvent<HTMLTextAreaElement>):void => {
        setContents(event.target.value)
    }

    const onClickSubmit = async ():Promise<void> => {
        const result = await createBoardComment({
            variables: { 
                boardId: "65d45c8e5d6eaa0029f7dfc0",
                createBoardCommentInput: {
                    writer,
                    password,
                    contents,
                    rating: 0
                }
            },
            refetchQueries: [
                {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: "65d45c8e5d6eaa0029f7dfc0" }
                }
            ]
        })
        
    }
    
    return (
        <>
            <CommentWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangePassword={onChangePassword}
                onChangeContents={onChangeContents}
                contents={contents}
            />
            <CommentList
                password={password}
                data={data}
            />
        </>
    )
}