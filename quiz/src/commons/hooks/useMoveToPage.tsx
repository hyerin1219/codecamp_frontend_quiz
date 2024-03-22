import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { visitedPageState } from "../stores"

interface IUseMoveToPageReturn {
    visitedPage: string,
    onClickMoveToPage: (path:string) => () => void
}

export const useMoveToPage = ():IUseMoveToPageReturn => {
    const router = useRouter()
    const [ visitedPage, setVisitedPage ] =useRecoilState(visitedPageState)

    const onClickMoveToPage = (path:string) => () => {
        void router.push(path)
        setVisitedPage(path)
    }

    return {
        visitedPage,
        onClickMoveToPage
    }
}