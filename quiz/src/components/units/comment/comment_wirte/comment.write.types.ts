import type { ChangeEvent } from "react"

export interface ICommentWriteUIProps {
    onClickSubmit: () => void
    onChangeWriter: (event:ChangeEvent<HTMLInputElement>)=> void
    onChangePassword: (event:ChangeEvent<HTMLInputElement>)=> void
    onChangeContents: (event:ChangeEvent<HTMLTextAreaElement>)=> void
    contents: string
}