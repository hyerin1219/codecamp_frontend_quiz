
export default function Presenter(props:any):JSX.Element {
    return <div>{props.child}는 {props.age}살 입니다.</div>;
}