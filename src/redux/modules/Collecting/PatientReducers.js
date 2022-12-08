import Types from "../../ActionConstants";
import {ToastError} from "../../../components/collectingComponent/Toast";


const initialData = {
    patientInfo: {
        loading: false,
        data: {
            patientInfo: {
                patientNo: '',
                patientName: '',
                patientAge: '',
                patientBloodType: '',
                patientHeight: '',
                patientWeight: '',
                patientAddress: '',
                patientPhoneNumber: '',
                patientResidentNumber: '',
                patientGender: '',
                visitCode: '',
                visitDt: '',
                visitStatus: '',
                userName: '',
                departmentName: ''
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {
    switch (type) {
        case Types.GET_PATIENT_INFO:
            console.log('state');
            console.log(state);
            const tmp = {
                ...state, // TODO 3
                patientInfo: {
                    ...state.patientInfo,
                    loading: false,
                    data: payload
                }
            };
            if(payload.length === 0) {
                ToastError("방문 내역이 존재하지 않습니다!");
            }
            return tmp;
        default:
            return state;
    }
}

export default reducer;