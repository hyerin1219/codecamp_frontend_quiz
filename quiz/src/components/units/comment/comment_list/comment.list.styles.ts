import styled from "@emotion/styled";

export const CommentListTitle = styled.div`
    box-sizing: border-box;
    padding: 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid #000;
`
export const ListWrap = styled.div`
    box-sizing: border-box;
    padding: 10px;
`
export const ListContents = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    padding: 10px 0;
    font-size: 20px;
    border-bottom: 2px solid #000;
`
export const CommentProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
`
export const CommentWriter = styled.p`
    width: 120px;
    font-size: 30px;
`
export const CommentDate = styled.p`
    color: #ddd;
    width: 120px;
`
export const CommentContents = styled.div`
    width: 900px;
`
export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
`
export const ButtonIcon = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 5px;
    background-color: #fff;
    font-weight: bold;
    font-size: 20px;

    :hover {
        color: blue;
    }
`