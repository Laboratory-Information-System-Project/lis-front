import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import GetCheckedRow from "./GetCheckRow";
import {SAlert} from "./SAlert";
import LoadingModal from "../modal/LoadingModal";
import PrescribeActions from "../../../redux/modules/Collecting/PrescribeActions";
// import PrescribeActions from "../../../redux/modules/Collecting/PrescribeActions";

let prescribeCode = {
    prescribeCodeList: [],
    userId: []
}

const BarcodingButton = ({dataProvider, gridView}) => {
    const dispatch = useDispatch();
    let index;
    const [modal, setModal] = useState(false);

    const click = async (e) => {
        e.preventDefault();
        index = 0;
        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);


        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                index++;
            }
        }

        prescribeCode.userId.push(window.localStorage.getItem("userId"));

       await dispatch(BarcodeActions.postPrescribeData(prescribeCode));
        // gridView.resetCheckables(true);
        prescribeCode.prescribeCodeList = [];
        // initPrescribeInfo();

        setModal(true);
    }

    return (
        <>
        <button className={'collecting-button'} onClick={click}>채취</button>
    {
        modal?<LoadingModal/>:[]
    }
        </>
    )
}

export default BarcodingButton;