import { useCount } from "../../../../src/commons/hooks/useCount";


export default function QuizPage():JSX.Element {

    const { onClickButton, count } = useCount()

    return (
    <>
        <div>
            <p>지금의 카운트는 {count}  입니다!</p>
            <button onClick={onClickButton}>Count up!</button>
        </div>
    </>
    );
}