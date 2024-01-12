import { useQuery, gql } from "@apollo/client"

const FETCH_PRODUCTS = gql`
    mutation fetchProducts($Page: Int){
        fetchProducts(page: $page) {
            _id
            seller
            name
            detail
            price
        }
}
`
export default function createProductsPage() {

    const [fetchProducts] = useQuery(FETCH_PRODUCTS)

    

    return (

        

    )
}