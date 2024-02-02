import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

export default function CalendarPAge():JSX.Element {

    const [changedate, setChangedate] = useState()
    const [changemonth, setChangeMonth] = useState()

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {

        setChangedate(dateString)
        setChangeMonth(date?.$M + 1)
    };


    return (
        <>
            <Space direction="vertical">
                <DatePicker onChange={onChange}/>
                <div>{changedate}</div>
                <div>{changemonth}</div>
            </Space>
        </>
        
    )
}
