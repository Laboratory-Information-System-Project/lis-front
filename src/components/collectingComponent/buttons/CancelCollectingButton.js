import React from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";
import Swal from "sweetalert2";
import SAlert from "./SAlert";

let prescribeCode = {
    prescribeCodeList: []
}
const CancelCollectingButton = ({dataProvider, gridView}) => {
    const dispatch = useDispatch();
    let index = 0;

    const click = async () => {
        gridView.commit();
        const checkedRow = GetCheckedRow(gridView, dataProvider);

        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            if (rows[checkedRow[i]] !== undefined) {
                prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                index++;
            }
        }


        await dispatch(CollectingActions.cancelCollecting(prescribeCode));
        gridView.resetCheckables(false);

        SAlert('바코드출력이 취소되었습니다!','','success');

        prescribeCode.prescribeCodeList = [];
    }
    return (
        <button className={'collecting-button'} onClick={click}>채혈취소</button>
    )
}

export default CancelCollectingButton