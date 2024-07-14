export default function hofPage():JSX.Element {

    const onClickButton = (aa:any) => () => {
        console.log(aa)
    }

    return(
        <>
            <button onClick={onClickButton(123)}>버튼</button>
        </>
    )
}