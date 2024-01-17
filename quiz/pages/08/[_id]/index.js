import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
        query fetchProduct($productId: ID) {
            fetchProduct(productId: $productId) {
                _id
                seller
                name
                detail
                price
            }
        }
    `

export default function ProductDetailPage() {

    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables:{
            productId: router.query._id
        }
    })


    const movePage = () => {
        router.push(`/08/${router.query._id}/edit`)
    }

    return (

        <>
            <div>판매자 : {data?.fetchProduct.seller}</div>
            <div>상품 명 : {data?.fetchProduct.name}</div>
            <div>상품 설명 : {data?.fetchProduct.detail}</div>
            <div>상품 가격 : {data?.fetchProduct.price}</div>
            <button onClick={movePage}>수정하러 가기</button>
        </>
    )
}