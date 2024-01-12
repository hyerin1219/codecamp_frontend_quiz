import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import {CREATE_PRODUCT} from './ProductWrite.queries'

import WritePresenter from "./ProductWrite.presenter"

export default function WriterContainer() {
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

    const router = useRouter()

    const onClickSubmit = async () => {

        try {

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
            console.log(result.data.createProduct._id)
            router.push(`/section08_quiz/board-moved/ ${result.data.createProduct._id}`)


        } catch(error) {
            alert(error.message)
        }

        

    }

    return (

        <WritePresenter 
            aaa={changeSeller}
            bbb={changeName}
            ccc={changeDetail}
            ddd={changePrice}
            eee={onClickSubmit}
        />
    )
}