import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
        mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
            createProduct( seller: $seller, createProductInput: $createProductInput ) {
                _id
                number
                message
            }
        }
    `

export default function BoardPage() {

    const [seller, setSeller] = useState()
    const [name, setName] = useState()
    const [detail, setDetail] = useState()
    const [price, setPrice] = useState()

    const changeSeller = (event) => {
        setSeller(event.target.value)
    }
    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeDetail = (event) => {
        setDetail(event.target.value)
    }
    const changePrice = (event) => {
        setPrice(event.target.value)
    }

    

    const [Mygql] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {

        const result = await Mygql({
            variables: {
                seller,
                createProductInput: {
                    name,
                    detail,
                    price: Number(price)
                }
            }
        }) 

        console.log(result)

    }

    
    return (
        <div>
            판매자: <input type="text" onChange={changeSeller} />
            상품명: <input type="text" onChange={changeName} />
            상품내용: <input type="text" onChange={changeDetail} />
            상품가격: <input type="text" onChange={changePrice} />
            <button onClick={onClickSubmit}>상품 등록</button>
        </div>
    )
}