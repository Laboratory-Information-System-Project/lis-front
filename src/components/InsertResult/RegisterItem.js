import React from 'react';

import "../../styles/insertResult/insertResult.scss";

const RegisterItem = ({data, onConclusion,MessageInfo}) => {

    let resultCheck;

    let messageBarcode;

    if(MessageInfo.data !== '') {
        messageBarcode = MessageInfo.data
    }

    if(messageBarcode === data.barcode){
        resultCheck='O';
    } else if(data.resultNo===null){
        resultCheck='-';
    } else{
        resultCheck='O';
    }

    const onClick =()=>{
        onConclusion(data.barcode, data.registerCode);
    }

    return (
        <tr onClick={onClick}>
            <td>{data.barcode}</td>
            <td>{data.orderCode}</td>
            <td>{resultCheck}</td>
            <td>{data.registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

