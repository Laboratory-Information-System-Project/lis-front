import React from 'react';

import "../../styles/insertResult/insertResult.scss";

const RegisterItem = ({data, onConclusion,MessageInfo}) => {

    let resultCheck;
    let messageBarcode;
    let messageOrderCode;

    if(MessageInfo.data !== undefined) {
        messageBarcode = MessageInfo.data[0]
        messageOrderCode = MessageInfo.data[1]
    }

    if(messageBarcode === data.barcode.toString() && messageOrderCode===data.orderCode){
        resultCheck='O';
    } else if(data.statusCode==='M'){
        resultCheck='O';
    } else{
        resultCheck='-';
    }

    const onClick =()=>{
        onConclusion(data.barcode, data.registerCode, data.orderCode);
    }


    return (
        <tr onClick={onClick}>
            <td>{data.patientNo}</td>
            <td>{data.barcode}</td>
            <td>{data.orderCode}</td>
            <td>{resultCheck}</td>
            <td>{data.registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

