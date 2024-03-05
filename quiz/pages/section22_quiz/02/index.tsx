import { gql, useMutation } from "@apollo/client"
import type { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types"
import { type ChangeEvent, useRef, useState } from "react"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){url}
    }
` 

export default function ImagePage():JSX.Element {

    const [imageUrl, setImageUrl] = useState<File[]>([])
    const fileRef = useRef<HTMLInputElement>(null)

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

    const onClickUpload = async (event:ChangeEvent<HTMLInputElement>):Promise<void> => {

        const file = event.target.files?.[0]

        const result = await uploadFile({
            variables: {
                file
            }
        })
        setImageUrl([
            result.data?.uploadFile.url ?? ""
        ])
    }

    const onClickFile = ():void => {
        console.log(fileRef.current)
        fileRef.current?.click()
    }

    return(
        <div style={{display:"flex"}}>
            <div onClick={onClickFile} style={{display:"flex"}}>
                <div>
                    <div  style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"gray", textAlign:"center",width:"80px", height:"80px", margin: "10px", cursor:"pointer", position:"relative"}}>
                        +<br/>Upload
                        <img src={`https://storage.googleapis.com/${imageUrl}`} style={{width:"80px", height:"80px", objectFit:"cover", position:"absolute"}} />
                    </div>
                    <input type="file" ref={fileRef} onChange={onClickUpload} style={{display:"none"}} />
                </div>

                <div>
                    <div  style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"gray", textAlign:"center",width:"80px", height:"80px", margin: "10px", cursor:"pointer", position:"relative"}}>
                        +<br/>Upload
                        <img src={`https://storage.googleapis.com/${imageUrl}`} style={{width:"80px", height:"80px", objectFit:"cover", position:"absolute"}} />
                    </div>
                    <input type="file" ref={fileRef} onChange={onClickUpload} style={{display:"none"}} />
                </div>

                <div>
                    <div  style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"gray", textAlign:"center",width:"80px", height:"80px", margin: "10px", cursor:"pointer", position:"relative"}}>
                        +<br/>Upload
                        <img src={`https://storage.googleapis.com/${imageUrl}`} style={{width:"80px", height:"80px", objectFit:"cover", position:"absolute"}} />
                    </div>
                    <input type="file" ref={fileRef} onChange={onClickUpload} style={{display:"none"}} />
                </div>
                
            </div>

        </div>
    )
}