import * as A from "./ProductWrite.styles";

export default function ProductComponentsUI(props) {

    return (
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            판매자 : <A.WriteInput onChange={props.writeSeller}/><br/>
            상품 명 : <A.WriteInput onChange={props.writeName}/><br/>
            상품 설명 : <A.WriteInput onChange={props.writeDetail}/><br/>
            상품 가격 : <A.WriteInput onChange={props.writePrice}/><br/>
            <A.WriteButton onClick={ props.isEdit ? props.onClickEdit : props.onClickNew} >{props.isEdit ? "수정" : "등록"}하기</A.WriteButton>
        </div>
    )
}