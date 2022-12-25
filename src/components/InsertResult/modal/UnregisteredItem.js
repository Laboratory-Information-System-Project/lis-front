import React from 'react';
// import "../../../styles/modal.scss"

const UnregisteredItem = ({data, setBarcode,closeModal}) => {

    let resultCheck;

    if(data.statusCode==='D'){
        resultCheck='V';
    } else{
        resultCheck='-';
    };

    const onSearch = () => {
        setBarcode(data.barcode);
        closeModal();
    }

    return (
        <tr>
            <td>{data.patientNo}</td>
            <td>{data.barcode}</td>
            <td>{data.orderCode}</td>
            <td className="resultCheck">{resultCheck}</td>
            <td>{data.registerDt.replace('T',' ')}</td>
            <td><button className="item_btn" onClick={onSearch}>검색</button></td>
        </tr>
    )
};

export default UnregisteredItem;
