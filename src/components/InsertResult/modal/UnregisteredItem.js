import React from 'react';
// import "../../../styles/modal.scss"

const UnregisteredItem = ({data, setBarcode,closeModal,index}) => {

    const onSearch = () => {
        setBarcode(data.barcode);
        closeModal();
    }

    return (
        <tr>
            <td>{index+1}</td>
            <td>{data.patientNo}</td>
            <td>{data.barcode}</td>
            <td>{data.orderCode}</td>
            <td>{data.registerDt.replace('T',' ')}</td>
            <td><button className="item_btn" onClick={onSearch}>검색</button></td>
        </tr>
    )
};

export default UnregisteredItem;

