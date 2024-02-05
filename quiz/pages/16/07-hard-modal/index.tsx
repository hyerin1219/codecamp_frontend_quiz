import styled from "@emotion/styled"
import { useState } from "react"

export default function HardModalPage():JSX.Element {

    const ModalPopup = styled.div`
        position: relative;
        width: 350px;
        height: 150px;
        background-color: tomato;
    `
    const ModalCloseButton = styled.button`
        position: absolute;
        top: 10px;
        right: 10px;
    `

    const [isOpen, setIsOpen] = useState(false)

    const modalOpen = ():void => {
        setIsOpen(true)
    }

    const modalClose = ():void => {
        setIsOpen(false)
    }

    return(
        <div>
            <button onClick={modalOpen}>모달 열기</button>
            { isOpen &&
                <ModalPopup>
                    <ModalCloseButton onClick={modalClose}>모달 닫기</ModalCloseButton>
                </ModalPopup>
            }
        </div>
    )
}