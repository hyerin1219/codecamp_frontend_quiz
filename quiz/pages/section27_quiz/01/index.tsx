import Input01 from "../../../src/commons/inputs/01";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import { yupResolver } from '@hookform/resolvers/yup'
import { wrapFormAsync } from "../../../src/commons/libraries";
import Button01 from "../../../src/commons/buttons/01";

interface IFormData {
    writer: string
    title: string
    contents: string
    password: string
}

export default function ReactHookFormPage():JSX.Element {

    const {register, handleSubmit, formState} = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onClickSubmit = (data:IFormData):void => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>

                <Input01 error={formState.errors.writer?.message} conTitle="이름" register={register("writer")}/>
                <Input01 error={formState.errors.password?.message} conTitle="비밀번호" type="password" register={register("password")}/>
                <Input01 error={formState.errors.title?.message} conTitle="제목" register={register("title")}/>
                <Input01 error={formState.errors.contents?.message} conTitle="내용" register={register("contents")}/>
                <Button01 isActive={formState.isValid} title="등록하기" ></Button01>
            </form>
        </>
    )
}