import styled from "@emotion/styled";
import { useState } from "react";

// 스타일
const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
    `;
    const Wrapper = styled.table`
    width: 600px;
    `;
    const MyTr = styled.tr`
    text-align: center;
    `;
    const MyTd = styled.td`
    padding: 20px 0 20px 0;
    `;


export default function Quiz02() {

  // 리스트에 뿌려줄 목업 데이터

    const dataList = [
        { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
        { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
        { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
        { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
        { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
        { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
    ];

    



  // 체크 할 때 마다 해당 id를 담아줄 배열

    const [checkList, setCheckList] = useState([]);
    console.log("현재 체크리스트",checkList);


    // 전체선택 누를 경우 

    const onClickCheckAll = () => {
        console.log("받아오는 데이터의 길이",dataList.length)
        console.log("현재 체크리스트에 들어있는 데이터의 길이",checkList.length)
        if (checkList.length !== dataList.length) {
        setCheckList(dataList);
        } else {
        setCheckList([]);
        }
    };

    // 체크리스트 선택
    const onCheckedItem = (list) => {
        console.log("내가 누른 체크리스트가 뭔가?",list)
        // 모든 원소가 조건에 맞으면 true (checkLis에 값이 없음)
        if (checkList.every((cur) => cur.id !== list.id)) {
        setCheckList([...checkList, list]);
        } else {
        // 체크된것만 제외하고 배열에 담는다.
        const result = checkList.filter((cur) => cur.id !== list.id);
        setCheckList(result);
        }
    };

    
    
    // 현재 체크리스트에 해당 list id가 있다면 true, 없으면 false
    const isChecked = (list) => {
        return checkList.some((cur) => cur.id === list.id);
    };

    return (
        <Container>
        <Wrapper>
            <tr>
            <th>
                <input
                type="checkbox"
                onChange={onClickCheckAll}
                checked={checkList.length === dataList.length}
                style={{marginTop:"5px"}}
                ></input>
            </th>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
            </tr>
            {dataList.map((list, index) => (
            <MyTr key={index}>
                <MyTd>
                <input
                    type="checkbox"
                    onChange={() => onCheckedItem(list)}
                    checked={isChecked(list)}
                    style={{marginTop:"5px"}}
                />
                </MyTd>
                <MyTd>{list.id}</MyTd>
                <MyTd>{list.data}</MyTd>
                <MyTd>{list.date}</MyTd>
            </MyTr>
            ))}
        </Wrapper>
        </Container>
    );
    }