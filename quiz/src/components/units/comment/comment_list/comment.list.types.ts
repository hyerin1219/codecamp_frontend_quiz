export interface ICommentListProps {
    password: string
    data: any
}

export interface ICommentListUIProps {
    data: any
    onClickCommentDeleted: () => Promise<void>
}