import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";
import ProductComponentsUI from "./ProductWrite.presenter"
import { useMutation} from "@apollo/client"
import { useState } from "react";
import { useRouter } from "next/router";


export default function ProductComponentPage(props) {

    const [ seller ,setSeller] = useState("")
    const [ name, setName] = useState("")
    const [ detail, setDetail] = useState("")
    const [ price, setPrice] = useState("")

    
    const [Mygql] = useMutation(CREATE_PRODUCT)
    const [UpdateGql] = useMutation(UPDATE_PRODUCT)
    const router = useRouter()

    const writeSeller = (event) => {
        setSeller(event.target.value)
    }
    const writeName = (event) => {
        setName(event.target.value)
    }
    const writeDetail = (event) => {
        setDetail(event.target.value)
    }
    const writePrice = (event) => {
        setPrice(Number(event.target.value))
    }

    const onClickNew = async () => {
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
        router.push(`/08/${result.data.createProduct._id}`)

    }

    const onClickEdit = async () => {

        const myVariables = {}
        if(seller) {myVariables.seller = seller}
        if(name) {myVariables.name = name}
        if(detail) {myVariables.detail = detail}
        if(price) {myVariables.price = Number(price)}


        const result = await UpdateGql({
            productId: router.query._id,
            variables: myVariables
        })

        router.push(`/08/${result.data.updateProduct._id}`)
    }
    
    return(
        <ProductComponentsUI 
            onClickNew={onClickNew}
            onClickEdit={onClickEdit}
            writeSeller={writeSeller}
            writeName={writeName}
            writeDetail={writeDetail}
            writePrice={writePrice}
            isEdit={props.isEdit}
            data={props.data}
        />
    ) 
}