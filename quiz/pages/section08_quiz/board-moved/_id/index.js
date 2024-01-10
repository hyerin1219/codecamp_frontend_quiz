import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(
            productId: $productId
        ){
            _id
            seller
            name
            detail
            price
        }
    }

`


export default function fethBoardPage() {
    
    const router = useRouter()

    const {data} = useQuery( FETCH_PRODUCT, {
        variables: {
            productId: Number(router.query._id)
        }
    })
    
    console.log(data)
    
    return (

        <div>
            <div>{router.query._id}님의 상품을 불러왔습니다.</div>
            <div>판매자: {router.query.seller}</div>
            <div>상품명: {router.query.name}</div>
            <div>내용: {router.query.detail}</div>
            <div>가격:{router.query.price} </div>
        </div>

    )
}