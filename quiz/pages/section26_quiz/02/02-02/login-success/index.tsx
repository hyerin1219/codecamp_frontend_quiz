import { gql, useQuery } from "@apollo/client"
import type { IQuery } from "../../../../../src/commons/types/generated/types"
import { loginCheck } from "../../../../../src/commons/hocs/login_check"

const FETCH_USER_LOGGEDIN = gql`
    query {
        fetchUserLoggedIn {
            email
            name
        }
    }
`

function loginSuccessPage():JSX.Element {
    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN)

    return (
        <>
            {data?.fetchUserLoggedIn.name}님 어서오세요~!
        </>
    )
}

export default loginCheck(loginSuccessPage)