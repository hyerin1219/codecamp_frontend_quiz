import styled from "@emotion/styled"
import SimpleSlider from "./slider/slider"

export default function LayoutBanner():JSX.Element {

    const Wrapper = styled.div`
        height: 150px;
        background-color: orange;
    `

    return (
            <Wrapper>
                <SimpleSlider/>
            </Wrapper>
        )
}