import React from 'react';

import "../../styles/insertResult/insertResult.scss";

const RegisterItem = ({barcode, registerDt, onConclusion, registerCode, orderCode,resultNo}) => {

    let resultCheck;
    console.log(resultNo)

    if(resultNo===null){
        resultCheck='X';
    } else{
        resultCheck='O';
    }

    const onClick =()=>{
        onConclusion(barcode, registerCode);
    }

    return (
        <tr onClick={onClick}>
            <td>{barcode}</td>
            <td>{orderCode}</td>
            <td>{resultCheck}</td>
            <td>{registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

