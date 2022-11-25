import React from "react";
import GetCheckedRow from "./GetCheckRow";
const CancelBarcodeButton = ({dataProvider,gridView})=>{
    const click = ()=>{
        const checkedRow = GetCheckedRow(dataProvider, gridView);

    }
    return (

        <button className={'collecting-button'} >채취취소</button>

    )
}

export default CancelBarcodeButton;