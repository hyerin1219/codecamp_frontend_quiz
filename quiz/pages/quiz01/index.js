import {Top, PageTit, ProfileImg, FlexBox, Name, TabMenuBox, TabMenu, StabMenu, MainBox, List, Listnum, Qlist, MainMenu,MainMenuImg ,MainMenuTit, MainMenuList, SMainMenuImg, SMainMenuTit} from '../../styles/quiz01'
export default function quiz01Page() {

    return (
        <MainBox>
            <Top>
                <PageTit>마이</PageTit>
                <FlexBox>
                    <ProfileImg></ProfileImg>
                    <Name>임정아</Name>
                    <div>o</div>
                </FlexBox>
            </Top>

            <div>
                <TabMenuBox>
                    <TabMenu>공지사항</TabMenu>
                    <TabMenu>이벤트</TabMenu>
                    <StabMenu>FAQ</StabMenu>
                    <TabMenu>Q&A</TabMenu>
                </TabMenuBox>
            </div>

            <div>
                <List>
                    <Listnum>Q.01</Listnum>
                    <Qlist>
                        <div>리뷰 작성은 어떻게 하나요?</div>
                        <div>o</div>
                    </Qlist>
                </List>

                <List>
                    <Listnum>Q.02</Listnum>
                    <Qlist>
                        <div>리뷰 수정/삭제는 어떻게 하나요?</div>
                        <div>o</div>
                    </Qlist>
                </List>

                <List>
                    <Listnum>Q.03</Listnum>
                    <Qlist>
                        <div>아이디/비밀번호를 잊어버렸어요.</div>
                        <div>o</div>
                    </Qlist>
                </List>

                <List>
                    <Listnum>Q.04</Listnum>
                    <Qlist>
                        <div>회원탈퇴를 하고싶어요.</div>
                        <div>o</div>
                    </Qlist>
                </List>

                <List>
                    <Listnum>Q.05</Listnum>
                    <Qlist>
                        <div>출발지 설정은 어떻게 하나요?</div>
                        <div>o</div>
                    </Qlist>
                </List>

                <List>
                    <Listnum>Q.06</Listnum>
                    <Qlist>
                        <div>비밀번호를 변경하고 싶어요.</div>
                        <div>o</div>
                    </Qlist>
                </List>
            </div>

            <MainMenu>
                <MainMenuList>
                    <MainMenuImg></MainMenuImg>
                    <MainMenuTit>홈</MainMenuTit>
                </MainMenuList>

                <MainMenuList>
                    <MainMenuImg></MainMenuImg>
                    <MainMenuTit>잇츠로드</MainMenuTit>
                </MainMenuList>

                <MainMenuList>
                    <MainMenuImg></MainMenuImg>
                    <MainMenuTit>마이찜</MainMenuTit>
                </MainMenuList>

                <MainMenuList>
                    <SMainMenuImg></SMainMenuImg>
                    <SMainMenuTit>마이</SMainMenuTit>
                </MainMenuList>

            </MainMenu>
        </MainBox>
    )
}