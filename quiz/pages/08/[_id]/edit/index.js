import ProductComponentsPage from '../../../../src/components/units/08-products/write/ProductWrite.container'
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

export default function ProductEditPage() {

    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables:{
            productId: router.query._id
        }
    })


    return(
        <ProductComponentsPage 
        isEdit={true} 
        data={data}
        />
    )
}