import CommentList from "../../src/components/units/comment/comment_list/comment.list.container";
import CommentWrite from "../../src/components/units/comment/comment_wirte/comment.write.container";


export default function CommentPage ():JSX.Element {

    return (
        <>
            <CommentWrite/>
            <CommentList/>
        </>
    )
}