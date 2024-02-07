import { gql, useQuery } from "@apollo/client"
import BoardListPage from "../../../src/components/units/18-pagination/BoardList"
import PaginationPage from "../../../src/components/units/18-pagination/Pagination"
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../src/commons/types/generated/types"

const FETCH_BOARDS =gql`
        query fetchBoards($page: Int) {
            fetchBoards(page: $page) {
                _id
                writer
                title
                contents
            }
        } 
    `

const FETCH_BOARDS_COUNT = gql`
    query{
        fetchBoardsCount
    }
`

export default function paginationPage():JSX.Element {

    const {data, refetch} = useQuery<Pick<IQuery,"fetchBoards">,IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const {data :fetchBoardsCountData} = useQuery<Pick<IQuery, "fetchBoardsCount">,IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

    const lastPage = fetchBoardsCountData != null ? Math.ceil(fetchBoardsCountData?.fetchBoardsCount / 10) : 1;

    console.log(data)
    return (
        <div>
            <BoardListPage
                data={data}
            />
            <PaginationPage
                refetch={refetch}
                lastPage={lastPage}
            />
        </div>
    )
}