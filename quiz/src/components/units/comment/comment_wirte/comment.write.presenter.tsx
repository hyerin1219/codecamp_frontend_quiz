import * as A from './comment.write.styles'
import type { ICommentWriteUIProps } from './comment.write.types'

export default function CommentWriteUI(props:ICommentWriteUIProps):JSX.Element {


    return (
        <>
            <A.CommentWrap>
                <A.CommentTopBox>
                    <A.CommentInputBox onChange={props.onChangeInputs} type='text' placeholder='작성자' id='writer' />
                    <A.CommentInputBox onChange={props.onChangeInputs} type='password' placeholder='비밀번호' id='password' />
                </A.CommentTopBox>

                <A.CommentBotBox>
                    <A.CommentTextareaBox onChange={props.onChangeInputs} id='contents' maxLength={300}  placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'/>

                    <A.CommentContentsNumBox>
                        <A.CommentContentsNum>0</A.CommentContentsNum>
                        <A.CommentContentsNum>/</A.CommentContentsNum>
                        <A.CommentContentsNum>300</A.CommentContentsNum>
                        <A.CommentSubmitButton onClick={props.onClickSubmit}>등록하기</A.CommentSubmitButton>
                    </A.CommentContentsNumBox>
                </A.CommentBotBox>
            </A.CommentWrap>
        </>
    )
}