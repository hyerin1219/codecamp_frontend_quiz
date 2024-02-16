import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import InfiniteScroll from "react-infinite-scroller"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"

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
        overflow: auto;
    `

    const DivFlex =styled.div`
        display: flex;
    `

    const DivContent = styled.div`
        margin-right: 20px;
    `

    const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const onLoadMore = ():void => {
        if(data === undefined) return

        void fetchMore({
            variables: {page: Math.ceil(data?.fetchBoards.length / 10 ?? 10) +1 },
            updateQuery: (prev, {fetchMoreResult}) => {
                if(fetchMoreResult.fetchBoards === undefined) {
                    return {
                        fetchBoards: [...prev.fetchBoards]
                    }
                }
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                }
            }
        })
    }

    return (
        <>
            <DivBox>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={onLoadMore}
                    hasMore={true}
                    useWindow={false}
                >
                    {data?.fetchBoards.map( (el) => (
                        <DivFlex key={el._id}>
                            <DivContent>{el.writer}</DivContent>
                            <DivContent>{el.title}</DivContent>
                            <DivContent>{el.contents}</DivContent>
                        </DivFlex>
                    ))}
                    
                </InfiniteScroll>
            </DivBox>
        </>
    )
}