import Types from "../../ActionConstants";
import {SAlert, SAlertWithTime} from "../../../components/collecting/buttons/SAlert";

const initialData = {
    collectingInfo : {
        loading: false,
        data: ''

    }
}

const reducer = (state = initialData, {type, payload}) => {
    switch (type){
        case Types.PUT_COLLECTING_DATA : {
            const collectingInfo = {
                ...state,
                collectingInfo : {
                    ...state.collectingInfo,
                    loading: false,
                    data : payload
                }
            }

            if(payload[0] === 'update success'){
                SAlertWithTime('채혈등록이 완료되었습니다','');
            }else if(payload[0] === 'update fail'){
                SAlert('채혈등록이 실패하였습니다','','error');
            }else {
                SAlert('채혈정보가 이미 존재합니다','','warning');
            }
            return collectingInfo;
        }

        case Types.CANCEL_COLLECTING : {
            const collectingInfo = {
                ...state,
                collectingInfo : {
                    ...state.collectingInfo,
                    loading: false,
                    data : payload.data
                }
            }

            if(payload.data[0] === "채혈이 취소되었습니다."){
                SAlert('채혈이 취소되었습니다!','','success');
            } else {
                SAlert('채혈 취소가 실패 하였습니다!','현재상태가 올바른지 확인해주세요','error');
            }
            return collectingInfo;
        }
        default:
            return state;

    }
}

export default reducer;