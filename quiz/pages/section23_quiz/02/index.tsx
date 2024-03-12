import { gql, useQuery } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import { useState } from "react"
import type {   MouseEvent, ChangeEvent } from "react"
import _ from 'loadsh'

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
    const [search, setSearch] = useState("");
    const [debounce, setDebounce] = useState(0); // state 추가

    const {data, refetch} = useQuery < Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs > (FETCH_BOARDS);

    // lodash의 디바운스 const getDebounce = _.debounce((data) => {   refetch({ search:
    // data });   setSearch(data); }, 500); 직접 구현
    function getDebounce(data : string):void {
        if (debounce) 
            window.clearTimeout(debounce);
        
        const time = window.setTimeout(() => {
            console.log("실행");
            void refetch({search: data});
            setSearch(data);
        }, 500);

        setDebounce(time);
    }

    function onChangeSearch(event : ChangeEvent<HTMLInputElement>):void {
        getDebounce(event.target.value);
    }

    function onClickPage(event : MouseEvent<HTMLSpanElement>):void {
        void refetch({
            search: search,
            page: Number((event.target as Element).id)
        });
    }

    return (
        <> 
            <input type = "text" onChange = {onChangeSearch } /> 
            {
                data?.fetchBoards.map((data) => (< div key = {
                            data._id
                        } > <span> {
                            data.writer
                        }</span><span> {
                            data.title
                        }</span><span> {
                            data.createdAt
                        }</span></div>))
            } 
            {
                new Array(10)
                    .fill(1)
                    .map((_, index) => (< span key = {
                        index
                    }
                    id = {
                        String(index + 1)
                    }
                    onClick = {
                        onClickPage
                    } > {
                        index + 1
                    }</span>))
            }
        </>
    );
    
}