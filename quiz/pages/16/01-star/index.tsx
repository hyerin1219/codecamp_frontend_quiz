import React, { useState } from 'react';
import {  Rate } from 'antd';

export default function StarPage():JSX.Element {
    const [star, setStar] = useState(0);

    const onClickStar = (value:number):void => {
        setStar(value)
        alert(value)
    };

    return (
        <div>
            <Rate onChange={onClickStar} value={star} />
            <div>{star}점</div>
        </div>
    )

}