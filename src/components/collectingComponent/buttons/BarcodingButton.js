import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import GetCheckedRow from "./GetCheckRow";

const prescribeCode = {
    prescribeCodeList: []
}
const BarcodingButton = ({dataProvider, gridView}) => {
    // const { barcodeList } = useSelector((state)=> state.barcodeList);
    const dispatch = useDispatch();
    const click = async () => {

        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);
        console.log(checkedRow);

        if(checkedRow[0] === undefined){
            alert("처방을 선택해주세요!");
            return null;
        }


        console.log(checkedRow);

        let rows = dataProvider.getJsonRows();
        console.log(rows);

        for (let i = 0; i < rows.length; i++) {
            prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]]?.prescribe_code;
        }

        dispatch(BarcodeActions.postPrescribeData(prescribeCode));
        gridView.resetCheckables(true);
    }
    return (
        <button className={'collecting-button'} onClick={click}>채취</button>
    )
}

export default BarcodingButton;