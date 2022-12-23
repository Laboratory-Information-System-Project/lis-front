import Types from "../../ActionConstants";
import {ToastError} from "../../../components/collecting/Toast";

const InitialData = {
    patientInfo: {
        loading: false,
        data: {
                PATIENT_RESIDENT_NUMBER: '',
                PATIENT_WEIGHT: '',
                PATIENT_NO: '',
                PATIENT_HEIGHT: '',
                PATIENT_NAME: '',
                PATIENT_AGE: '',
                PATIENT_GENDER: '',
                PATIENT_BLOOD_TYPE: '',
                PATIENT_MEMO:''
        }
    }
}

const reducer = (state = InitialData, {type, payload}) => {

    switch (type) {
        case Types.GET_PATIENT_INFO:
            const patient = {
                ...state,
                patientInfo: {
                    ...state.patientInfo,
                    loading: false,
                    data: payload
                }
            };

            if(payload.length === 0) {
                ToastError("환자가 존재하지 않습니다!");
            }
            return patient;
        default:
            return state;
    }


}

export default reducer;
