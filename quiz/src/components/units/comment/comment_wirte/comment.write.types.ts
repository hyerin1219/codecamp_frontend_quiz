export interface ICommentWriteUIProps {
    onClickSubmit: () => void
    onChangeInputs: (event:any)=> void
    inputs: {
        writer: string,
        password: string,
        contents: string
    }
}