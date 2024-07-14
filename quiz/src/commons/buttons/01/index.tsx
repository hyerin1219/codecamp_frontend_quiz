interface IButton01Props {
    title: string
    isActive: boolean
}

export default function Button01(props: IButton01Props):JSX.Element {
    return <button disabled={!props.isActive} style={{backgroundColor: props.isActive ? "yellow" : ""}}>{props.title}</button>
}