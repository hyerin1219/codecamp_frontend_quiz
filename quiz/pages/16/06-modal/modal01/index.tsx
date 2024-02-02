import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function ModalPage():JSX.Element {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = ():void => {
        setIsModalOpen((prev) => !prev)
    }

    return(
        <>
            <Button Button onClick={toggleModal}>모달열기</Button>
            <Modal
                open={isModalOpen}
                onOk={toggleModal} 
                onCancel={toggleModal}
            >
                모달이 열렸습니다
            </Modal>
        </>
    )
}