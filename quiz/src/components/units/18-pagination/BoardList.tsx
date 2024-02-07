import type { IQuery } from "../../../commons/types/generated/types"

interface BoardListPageProps {
    data?: Pick<IQuery, "fetchBoards">
}

export default function BoardListPage(props:BoardListPageProps):JSX.Element {
    
    return (
        <>
            <div >
                {props.data?.fetchBoards.map((el) => (
                    <div style={{display:"flex"}} key={el._id}>
                        <div style={{width: "200px"}}>{el.title}</div>
                        <div>{el.contents}</div>
                    </div>
                ))}
            </div>
        </>
    )
}