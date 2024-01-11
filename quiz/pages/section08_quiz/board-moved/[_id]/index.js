import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(
            productId: $productId
        ) {
            _id
            seller
            name
            detail
            price
        }
    }

`


export default function fecthBoardPage() {
    
    const router = useRouter()

    console.log(router)

    const {data} = useQuery( FETCH_PRODUCT, {
        variables: {
            productId: router.query._id
        }
    })

    console.log(data)

    
    return (

        <div>
            <div>판매자: {data ? fetchProduct.seller : "loading"}</div>
            <div>상품명: {data ? fetchProduct.name : "loading"}</div>
            <div>내용: {data ? fetchProduct.detail : "loading"}</div>
            <div>가격:{data ? fetchProduct.price : "loading"} </div>
        </div>

    )
}