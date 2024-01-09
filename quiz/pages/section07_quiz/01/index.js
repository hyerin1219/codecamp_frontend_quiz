import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const Creat_Board = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(
        writer: $writer,
        title: $title,
        contents: $contents
    ) { _id number message }
}

`


export default function gplPage() {

    const [Mygql] = useMutation(Creat_Board)

    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()
    
    const onClickSubmit = async () => {
        const result = await Mygql({
            variables:{
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const changeWriter = (event) => {
        setWriter(event.target.value)
    }
    
    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeContents = (event) => {
        setContents(event.target.value)
    }


    return (
        <div>
            작성자: <input  onChange={changeWriter} type="text"/>
            제목: <input  onChange={changeTitle} type="text"/>
            내용: <input  onChange={changeContents} type="text"/>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )
}