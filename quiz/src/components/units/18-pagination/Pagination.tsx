import type { ApolloQueryResult } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types"
import { useState } from "react"


interface IPaginationPageProps {
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
    lastPage: number
}

export default function PaginationPage(props: IPaginationPageProps):JSX.Element {

    const [startPage, setStartPage] = useState(1)

    const onClickPrevPage = ():void => {
        if (startPage === 1) return

        setStartPage(startPage - 10)
        void props.refetch({page: startPage - 10})
    }

    const onClickNextPage = ():void => {
        setStartPage(startPage + 10)
        void props.refetch({page: startPage + 10})
    }

    const onClickPage = (event: any):void => {
        if ( startPage + 10 <= props.lastPage  )
        void props.refetch( {page: Number(event.currentTarget.id)} )
    }

    return (
        <>
            <div style={{display: "flex"}}>
                <button onClick={onClickPrevPage}>이전</button>

                    {
                        new Array(10).fill(1).map((_, index) => (

                                index + startPage <= props.lastPage && (
                                <span 
                                onClick={onClickPage} 
                                key={index + startPage}
                                id={String(index + startPage)}
                                style={{margin: "10px"}}
                                >
                                    {index + startPage}
                                </span>
                            )
                        ))
                    }

                <button onClick={onClickNextPage}>다음</button>
            </div>
        </>
    )
}