import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
    query {
        fetchBoardComments(
            boardId: "65d45c8e5d6eaa0029f7dfc0"
        ) {
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`

