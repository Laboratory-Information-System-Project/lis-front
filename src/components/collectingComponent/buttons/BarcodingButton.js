import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";

const prescribeCode = {
    prescribeCodeList: []
}
const BarcodingButton = ({dataProvider, gridView}) => {
    // const { barcodeList } = useSelector((state)=> state.barcodeList);
    const dispatch = useDispatch();
    const click = async () => {

        let checkedRow = getCheckedRow(gridView, dataProvider);
        let index = 0;
        // console.log(checkedRow);

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]].prescribe_code;
        }

        dispatch(BarcodeActions.postPrescribeData(prescribeCode));
    }
    return (
        <button className={'collecting-button'} onClick={click}>채취</button>
    )
}

function getCheckedRow(gridView, dataProvider) {
    let rows = gridView.getCheckedRows(true);
    const boolCheck = dataProvider.getFieldValues('Bool');
    let selectedData = '';
    const firstCheckBoxLength = rows.length;
    let secondCheckBoxLength = boolCheck.length;
    let checkedRow = [];
    let index = 0;
    // let flag = false;

    // gridView.setCheckableExpression("value['Bool'] = false", true);
    console.log(rows)
    console.log(secondCheckBoxLength)

    for (let i = 0; i < firstCheckBoxLength; i++) {
        for (let j = 0; j < secondCheckBoxLength; j++) {
            if (rows[i] === j) {
                delete boolCheck[j];
                console.log(boolCheck);
                break;
            }
        }
            checkedRow[index] = rows[i];
            index++;

    }
    secondCheckBoxLength = boolCheck.length;
    for (let i = 0; i < secondCheckBoxLength; i++) {
        if (boolCheck[i] !== undefined) {
            checkedRow[index] = boolCheck[i];
        }
        index++;
    }

    return checkedRow;
}

export default BarcodingButton;