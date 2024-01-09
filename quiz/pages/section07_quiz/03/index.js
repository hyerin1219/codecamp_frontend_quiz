import axios from 'axios'

export default function restPage() {

    const onClickSubmit = async () => {
        const result = await axios.get('https://koreanjson.com/users')
        console.log(result)
    }


    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    )
}