import { useQuery, gql, useMutation } from "@apollo/client";
import CommentListUI from "./comment.list.presenter";
import { FETCH_BOARD_COMMENTS } from "./comment.list.queries";
import type { ICommentListProps} from "./comment.list.types";

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID! ) {
        deleteBoardComment(
            password: $password,
            boardCommentId: $boardCommentId
        )
    }
`

export default function CommentList(props:ICommentListProps):JSX.Element {

    const {data} = useQuery(FETCH_BOARD_COMMENTS)
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)

    const onClickCommentDeleted = async ():Promise<void> => {

        await deleteBoardComment({
            variables: {
                password: props.password,
                boardCommentsId: props.data?.fetchBoardComments?._id 
            },
            refetchQueries: [{
                query: FETCH_BOARD_COMMENTS,
                variables: { boardId: "65d45c8e5d6eaa0029f7dfc0" }

            }]
        })

    }

    return (
        <>
            <CommentListUI
                data={data}
                onClickCommentDeleted={onClickCommentDeleted}
            />
        </>
    )
}