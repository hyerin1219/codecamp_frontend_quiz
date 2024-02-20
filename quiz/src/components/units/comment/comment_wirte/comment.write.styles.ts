import styled from "@emotion/styled";

export const CommentWrap = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding: 20px;
`

export const CommentTopBox = styled.div`
    display: flex;
    align-items: center;
`

export const CommentInputBox = styled.input`
    box-sizing: border-box;
    width: 200px;
    height: 60px;
    margin-right: 20px;
    background-color: #fff;
    border: 3px solid #ddd;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    border-radius: 10px;
`

export const CommentBotBox = styled.div`
    position: relative;
    margin-top: 20px;
    height: 250px;
    border: 3px solid #ddd;
    background-color: #fff;
`

export const CommentTextareaBox = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 185px;
    font-size: 30px;
    font-weight: bold;
    border: none;
    border-bottom: 2px solid #ddd;
    padding: 10px;
    resize: none;
`
export const CommentContentsNum = styled.span`
    color: #dddddd;
    font-size: 20px;
`
export const CommentContentsNumBox = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 60px;
`
export const CommentSubmitButton = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 60px;
    color: #fff;
    background-color: #111;
    cursor: pointer;
`