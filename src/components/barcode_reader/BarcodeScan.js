import React, {useEffect, useState} from 'react'
import BarcodeScanModal from "./modal";
import styled from "@emotion/styled";

const BarcodeScan= ({barcode, setModal,setBarcode, modal, buttonForPatientInfo})=>{
    const [scanning, setScanning] = useState(false);
    const openModal = ()=> {
        setModal((prevState)=> !prevState);
    }
    return(
        <>
        <SearchClick className={'patient-input-btn'} onClick={openModal}>바코드 스캔</SearchClick>
        {modal?<BarcodeScanModal setBarcode={setBarcode}
                                 setModal={setModal}
                                 scanning={scanning}
                                 setScanning={setScanning}
                                 buttonForPatientInfo={buttonForPatientInfo}/>:''}
        </>
    )
}
const SearchClick = styled.button`
  border: 1px solid #3C9DF6;
  background: #fff;
  border-radius: 5px;
  color: #3C9DF6;
  font-weight: bold;
  padding: 3px 13px 3px 13px;
  margin-left: 1em;
  cursor: pointer;
  &:hover {
    background: #3C9DF6;
    color: #fff;
    transition: 0.5s;
    font-weight: bold;
  }
  &:active {
    background: #217BCE;
    border: 1px solid #217BCE;
    transition: 0.5s;
  }
`;
export default BarcodeScan