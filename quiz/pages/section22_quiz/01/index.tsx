import { gql, useMutation } from "@apollo/client"
import { type ChangeEvent, useState, useRef } from "react"
import type { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){url}
    }
` 
const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
            images
        }
    }
`

export default function BoardUpload():JSX.Element {

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
    const fileRef = useRef<HTMLInputElement>(null)


    const onChangeWirter = (event:ChangeEvent<HTMLInputElement>):void => {
        setWriter(event.target.value)
    }
    const onChangePassword = (event:ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }
    const onChangeTitle = (event:ChangeEvent<HTMLInputElement>):void => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event:ChangeEvent<HTMLInputElement>):void => {
        setContents(event.target.value)
    }

    const uploadImages = async (event:ChangeEvent<HTMLInputElement>):Promise<void> => {

        const file = event.target.files?.[0]

        const result = await uploadFile({
            variables: {
                file
            }
        })
        setImageUrl(result.data?.uploadFile?.url ?? "")
    }

    const onClickFile = ():void => {
        console.log(fileRef.current)
        fileRef.current?.click()
    }

    const onClickSubmit = async ():Promise<void> => {
        const boardResult = await createBoard({
            variables: {
                createBoardInput: {
                    writer,
                    password,
                    title,
                    contents,
                    images: [imageUrl]
                },
                
            }
        })

        console.log(boardResult)
    }

    return(
        <>
            <div>
                작정자: <input type="text" placeholder="입력해보세요." onChange={onChangeWirter} />
                비밀번호: <input type="password" placeholder="입력해보세요." onChange={onChangePassword} />
                제목: <input type="text" placeholder="입력해보세요." onChange={onChangeTitle} />
                내용: <input type="text" placeholder="입력해보세요." onChange={onChangeContents} />
            </div>
            <div>
                <div style={{width: "80px", height:"80px", backgroundColor:"tomato", cursor:"pointer"}} onClick={onClickFile} >파일 선택</div>
                <input type="file" onChange={uploadImages} style={{display: "none"}} ref={fileRef} />
                <img src={`https://storage.googleapis.com/${imageUrl}`} alt=""  />
            </div>
            <button onClick={onClickSubmit}>저장하기</button>
        </>
    )
}