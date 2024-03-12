import { useRecoilState } from "recoil"
import { isEditState } from "./recoil"

export default function WritePage():JSX.Element {

    const [isEdit, setIsEdit] = useRecoilState(isEditState)

    return (
        <div>
            { isEdit ? <h1>등록하기</h1>: <h1>수정하기</h1> }
        </div>
    )
}