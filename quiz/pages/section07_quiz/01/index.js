import { useMutation, gql } from "@apollo/client"

const qqq = gql`
        mutation {
            createBoard(writer: "dd", title: "dd입니다.", contents: "dd의 우산") {
                _id
                number
                message
            }
        } 
    `

export default function gplPage() {

    const [mygqul] = useMutation(qqq)

    const onClickSubmit = async () => {
        const result = await mygqul()
        console.log(result)
    }
    

    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    )
}