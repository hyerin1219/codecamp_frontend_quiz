import { gql, useQuery } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import { useState } from "react"
import type {   MouseEvent, ChangeEvent } from "react"
import _ from 'loadsh'
import {v4 as uuidv4} from 'uuid'

const FETCH_BOARDS = gql `
    query fetchBoards($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search) {
            _id
            contents
            writer
            title
        }
    }
`

export default function SearchPage():JSX.Element {

    const {data, refetch} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const [keyword, setKeyword] = useState("")

    const onClickPage = (event:MouseEvent<HTMLSpanElement>): void => {
        void refetch({page: Number(event.currentTarget.id)})
    }

    const getDebounce = _.debounce(value) => {
        refetch({search: value, page: 1})
        setKeyword(value)
    }

    const onChangeSearch = (event:ChangeEvent<HTMLInputElement>):void => {
        getDebounce(event.currentTarget.value)
    }


    return(
        <>
            <div style={{margin: "20px"}}>
                검색어: <input type="text" placeholder="검색어를 입력하세요." onChange={onChangeSearch}/>
            </div>

            {
                data?.fetchBoards.map((el) => (
                    <div style={{display: "flex", margin: "20px"}} key={el._id} >
                        <div style={{margin: "0 20p", width: "300px"}}>{el.title}</div>
                        <div>{el.contents}</div>
                    </div>
                ))
            }

            
            {
                new Array(10).fill(1).map((_, index) => (
                    <span key={index + 1} id={String(index + 1)} onClick={onClickPage}  style={{margin: "10px"}}>{index + 1}</span>
                ))
            }
        </>
    )
}