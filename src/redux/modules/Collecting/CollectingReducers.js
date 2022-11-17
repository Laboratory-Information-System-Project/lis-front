import Types from "../../ActionConstants";


const initialData = {
    patientInfo : {
        loading: false,
        data : {
            visitCode: '',
            visitDt: '',
            visitStatus: '',
            patient: {
                patientNo: '',
                patientName: '',
                patientResidentNumber: '',
                patientWeight: '',
                patientHeight: '',
                patientBloodType: '',
                patientAge: '',
                patientGender: '',
                patientPhoneNumber: '',
                patientAddress: ''
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {
    console.log("1111111111111111111111");
    console.log(payload);
    switch (type) {
        case Types.GET_PATIENT_INFO:
            const tmp = {
                ...state, // TODO 3
                patientInfo: {
                    ...state.patientInfo,
                    loading: false,
                    data: payload
                }
            };
            return tmp;
        default:
            return state;
    }
}

export default reducer;