import { useEffect } from "react";
import WritePage from "../../../../src/components/units/example/write";
import  {  useRecoilState } from "recoil";
import { isEditState } from "../../../../src/components/units/example/recoil";

export default function RecoilEditPage():JSX.Element {

    const [isEdit, setIsEdit] = useRecoilState(isEditState)

    useEffect(() => {
        setIsEdit(false)
    },[])
    return (
        <>
            <WritePage 
                isEdit ={false}
            />
        </>
    )
}