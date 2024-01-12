import * as SS from './ProductWrite.styles'


export default function WritePresenter(props) {

    return (
        <SS.Box>
            판매자: <SS.TextInput type="text" onChange={props.aaa} />
            상품명: <SS.TextInput type="text" onChange={props.bbb} />
            상품내용: <SS.TextInput type="text" onChange={props.ccc} />
            상품가격: <SS.TextInput type="text" onChange={props.ddd} />
            <SS.ClickButton onClick={props.eee}>상품 등록</SS.ClickButton>
        </SS.Box>
    )

}