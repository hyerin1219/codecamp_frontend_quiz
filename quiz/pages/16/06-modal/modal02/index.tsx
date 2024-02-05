import React, { SetStateAction } from 'react';
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Button, Modal } from 'antd';


export default function AddressModalPage():JSX.Element {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [address, setAdderss] = useState("")

    const onToggleModel = (): void => {
        setIsModalOpen((prev) => !prev)
    }

    const addressData = (data:SetStateAction<string>):void => {
        setAdderss(data.address)
        onToggleModel()
    }

    return (
        <>
            <Button onClick={onToggleModel}>모달열기</Button>
            {isModalOpen && ( <Modal open={true} onOk={onToggleModel} onCancel={onToggleModel} >
                <DaumPostcodeEmbed onComplete={addressData}/>
            </Modal>)}
            <div>{address}</div>
        </>
    )
}