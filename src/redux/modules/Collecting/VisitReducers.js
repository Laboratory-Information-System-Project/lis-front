import Types from "../../ActionConstants";
import {ToastError} from "../../../components/collecting/Toast";

const InitialData = {
    visitInfo: {
        loading : false,
        data:{
            visitData: [],
        },
        empty : true,
        isInit : true
    }
}

const reducer = (state = InitialData, {type, payload}) => {

    switch (type) {
        case Types.GET_VISIT_INFO:
            const visit = {
                visitInfo: {
                    loading: false,
                    data: payload,
                    empty: false,
                    isInit:false
                }
            };

            if(payload.length === 0) {
                ToastError("방문 내역이 존재하지 않습니다!");
                visit.visitInfo.empty = true;
            }
            return visit;
        default:
            return state;
    }

}

export default reducer;