import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_BOARDS  = gql`
        query fetchBoards($page: Int) {
            fetchBoards(page: $page) {
                _id
                writer
                title
                contents
            }
        }
    `

export default function InfinitePage():JSX.Element {

    const DivBox = styled.div`
        height: 500px;
        background-color: tan;
    `

    const DivFlex =styled.div`
        display: flex;
    `

    const { data, fetchMore } = useQuery(FETCH_BOARDS)

    return (
        <>
            <DivBox>
                <DivFlex>
                    <div></div>
                    <div></div>
                    <div></div>
                </DivFlex>
            </DivBox>
        </>
    )
}