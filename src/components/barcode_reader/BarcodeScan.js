import React from 'react'
import BarcodeScanModal from "./modal";

const BarcodeScan= ({barcode,setModal,setBarcode, modal})=>{
    const openModal = ()=> {
        setModal((prevState)=> !prevState);
    }
    return(
        <>
        <button className={'patient-input-btn'} onClick={openModal}>바코드 스캔</button>
        {modal?<BarcodeScanModal setBarcode={setBarcode} setModal={setModal}/>:''}
        </>
    )
}

export default BarcodeScan