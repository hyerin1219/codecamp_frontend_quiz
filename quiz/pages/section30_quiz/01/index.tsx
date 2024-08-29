import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

const MyGql = gql`
    mutation($createBoardInput:CreateBoardInput) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`

const ReactQuill = dynamic(async () => await import('react-quill'), {ssr:false})

export default function WebEditorPage():JSX.Element {

    const [myCreateBoard] = useMutation(MyGql)
    
    const router = useRouter();

    const {register, setValue, trigger, handleSubmit} = useForm({
        mode: "onChange"
    })

    const onChangeContents = (value:string) => {
        setValue('contents', value === '<p><br></p>' ? '' : value)
    }

    const onClickSubmit = async (data:any): Promise<void> => {
        const result = await myCreateBoard({
            variables: {
                createBoardInput: {
                    writer:data.writer,
                    title:data.title,
                    content:data.contents,
                    password:data.password,
                }
            }
        })
        const { Modal } = await import('antd'); // code-splitting(코드 스플릿팅)
        Modal.success({ content: '게시글 등록에 성공하였습니다!' });
        const boardId = result.data.createBoard._id;
        void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`);
    }



    return(
        <>
            <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
                <div>
                    작성자: <input type="text" {...register('writer')} />
                </div>
                <div>
                    비밀번호: <input type="password" {...register('password')} />
                </div>
                <div>
                    제목: <input type="text" {...register('title')} />
                </div>
                <div>
                    내용: 
                </div>
                <button>등록하기</button>
            </form>
        </>
    )
}