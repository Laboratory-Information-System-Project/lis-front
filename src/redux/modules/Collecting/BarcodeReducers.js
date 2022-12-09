import Types from "../../ActionConstants";
import {SAlert, SAlertWithBarcode} from "../../../components/collectingComponent/buttons/SAlert";
import Barcode from "../../../components/collectingComponent/barcode/Barcode";

const initialData = {
    barcodeList : {
        loading: false,
        data: {
            barcodeList : {
                barcode: ''
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {

    switch (type) {
        case Types.POST_NEW_BARCODE :
            const newBarcode = {
                ...state,
                barcodeList: {
                    ...state.barcodeList,
                    loading: false,
                    data: payload
                }
            }

            if(payload[0] === 'create barcode successfully!' ){
                // SAlert('바코드가 생성되었습니다!','','success');
                SAlertWithBarcode(Barcode(payload[1]),'바코드가 생성되었습니다!','success');
            } else {
                SAlert('바코드가 이미 존재합니다!','','warning');
            }
            return newBarcode;
        case Types.CANCEL_BARCODE :
            const forCancelBarcode = {
                ...state,
                barcodeList : {
                    ...state.barcodeList,
                    loading:false,
                    data: payload
                }
            }
            return forCancelBarcode;

        case Types.GET_BARCODE :
            const barcode = {
                ...state,
                barcode: {
                    loading: false,
                    data: payload
                }
            }
            return barcode;
        default:
            return state;
    }

}

export default reducer;
