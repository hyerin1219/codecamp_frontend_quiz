import * as A from "./ProductWrite.styles";

export default function ProductComponentsUI(props) {

    

    return (
        <div>
            
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            판매자 : <A.WriteInput onChange={props.writeSeller} defaultValue={props.data?.fetchProduct.seller}/><br/>
            상품 명 : <A.WriteInput onChange={props.writeName} defaultValue={props.data?.fetchProduct.name}/><br/>
            상품 설명 : <A.WriteInput onChange={props.writeDetail} defaultValue={props.data?.fetchProduct.detail}/><br/>
            상품 가격 : <A.WriteInput onChange={props.writePrice} defaultValue={props.data?.fetchProduct.price}/><br/>
            <A.WriteButton onClick={ props.isEdit ? props.onClickEdit : props.onClickNew} >{props.isEdit ? "수정" : "등록"}하기</A.WriteButton>
        </div>
    )
}