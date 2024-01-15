import { useQuery, gql, useMutation } from "@apollo/client"

const FETCH_PRODUCTS = gql`
    query {
        fetchProducts{
            _id
            seller
            name
            detail
            price
        }
}
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            _id
            number
            message
        }
}
`


export default function createProductsPage() {

    const { data } = useQuery(FETCH_PRODUCTS)

    // console.log(data?.fetchProducts)

    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const onclickDelete = (event) => {
        deleteProduct({
            variables: {productId: event.target._id},
            refetchQueries: [{query: FETCH_PRODUCTS}]
        })

    }



    return (

        <div>
            {data?.fetchProducts.map(el => (
                <div key={el._id}>
                    <input type="checkBox"/>
                    <span>{el._id}</span>
                    <span>{el.seller}</span>,
                    <span>{el.name}</span>,
                    <span>{el.detail} </span>,
                    <span>{el.price}</span>
                    <button id={el._id} onClick={onclickDelete}>삭제</button>
                    {console.log(el._id)}
                </div>
            ))}
        </div>
        

    )
}