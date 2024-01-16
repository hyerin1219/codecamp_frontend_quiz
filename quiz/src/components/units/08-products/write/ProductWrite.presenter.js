import * as A from "./ProductWrite.styles";

export default function ProductComponentsUI() {

    return (
        <div>
            <h1>페이지</h1>
            판매자 : <A.WriteInput/>
            상품 명 : <A.WriteInput/>
            상품 설명 : <A.WriteInput/>
            상품 가격 : <A.WriteInput/>
            <A.WriteButton>등록하기</A.WriteButton>
        </div>
    )
}