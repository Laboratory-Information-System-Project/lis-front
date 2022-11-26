import React from "react";
import GetCheckedRow from "./GetCheckRow";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import {useDispatch} from "react-redux";
import {newCollecting} from "../../../api/CollectingApi";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";

const prescribeCode = {
    prescribeCodeList: []
}
const CollectingButton = ({dataProvider, gridView})=>{

    const dispatch = useDispatch();
    const click = async () => {

        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);

        if(checkedRow[0] === undefined){
            alert("처방을 선택해주세요!");
            return null;
        }

        console.log(checkedRow);

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]]?.prescribe_code;
        }

        dispatch(CollectingActions.putCollectingData(prescribeCode));
        gridView.resetCheckables(true);
    }

    return (
            <button className={'collecting-button'} onClick={click}>채혈</button>
    )
}

export default CollectingButton