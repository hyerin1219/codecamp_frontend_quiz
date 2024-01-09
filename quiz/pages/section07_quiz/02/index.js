import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
        mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
            createProduct(
                seller: $seller,
                createProductInput: $createProductInput
            ) {
                _id
                number
                message
            }
        }
    `

export default function productPage() {

    const [Mygql] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {

        const result = await Mygql({
            variables: {
                seller: "김디디",
                createProductInput: {
                    name :"마우스",
                    detail: "대단한 마우스",
                    price: 50000
                }
            }
        })
        console.log(result)
    }



    return (
        <div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )
}