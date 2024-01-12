import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import {CREATE_PRODUCT} from './ProductWrite.queries'

import WritePresenter from "./ProductWrite.presenter"

export default function WriterContainer( props) {
    const [seller, setSeller] = useState()
    const [name, setName] = useState()
    const [detail, setDetail] = useState()
    const [price, setPrice] = useState()

    const [isActive, setIsActive] = useState(false)

    const changeSeller = (event) => {
        setSeller(event.target.value)

        if (event.target.value && name && detail && price) {
            setIsActive(true)
        }
    }
    const changeName = (event) => {
        setName(event.target.value)
        if ( seller && event.target.value && detail && price) {
            setIsActive(true)
        }
    }
    const changeDetail = (event) => {
        setDetail(event.target.value)
        if ( seller && name && event.target.value && price) {
            setIsActive(true)
        }
    }
    const changePrice = (event) => {
        setPrice(event.target.value)
        if ( seller && name && detail && Number(event.target.value)) {
            setIsActive(true)
        }
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
            isActive={isActive}
        />
    )
}