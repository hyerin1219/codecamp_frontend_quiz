import * as A from './comment.list.styles'
import type { ICommentListUIProps } from './comment.list.types'

export default function CommentListUI(props:ICommentListUIProps):JSX.Element {

    return (
        <>
            <A.CommentListTitle>댓글</A.CommentListTitle>
            <A.ListWrap>
            {
                props.data?.fetchBoardComments.map( (el) => (
                    <A.ListContents key={el._id} id={el._id} >
                        <A.CommentProfile>
                            <A.CommentWriter>{el.writer}</A.CommentWriter>
                            <A.CommentDate>{el.createdAt}</A.CommentDate>
                        </A.CommentProfile>
                        <A.CommentContents>{el.contents}</A.CommentContents>
                        <A.ButtonWrap>
                            <A.ButtonIcon>수정</A.ButtonIcon>
                            <A.ButtonIcon onClick={props.onClickCommentDeleted}>삭제</A.ButtonIcon>
                        </A.ButtonWrap>
                    </A.ListContents>
                ))
            }
            </A.ListWrap>
        </>
    )
}