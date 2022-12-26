import Types from "../../ActionConstants";
import {SAlert, SAlertWithBarcode} from "../../../components/collecting/buttons/SAlert";
import Barcode from "../../../components/collecting/barcode/Barcode";

const initialData = {
    barcodeInfo : {
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
                barcodeInfo: {
                    ...state.barcodeInfo,
                    loading: false,
                    data: payload
                }
            }

            if(payload[0].message === 'create barcode successfully!' ){
                SAlertWithBarcode(Barcode(payload[2].barcode),'바코드가 생성되었습니다!','success');
            } else if(payload[0].message ==='failed create barcode!'){
                SAlert('바코드 생성이 실패하였습니다!','','warning');
            }else {
                SAlert('바코드가 이미 존재합니다!','','warning');
            }
            return newBarcode;
        case Types.CANCEL_BARCODE :
            const forCancelBarcode = {
                ...state,
                barcodeInfo : {
                    ...state.barcodeInfo,
                    loading:false,
                    data: payload
                }
            }

            if(payload[0].message === '선택하신 바코드 발급이 취소되었습니다'){
                SAlert(payload[0].message, '', 'success');
            }else{
                SAlert('바코드 발급 취소가 실패하였습니다.',
                    '현재 상태가 올바른 값인지 체크해 주세요!',
                    'warning' )
            }

            return forCancelBarcode;

        case Types.GET_BARCODE :
            const barcode = {
                ...state,
                barcodeInfo: {
                    loading: false,
                    data: payload
                }
            }
            console.log("payload");
            console.log(payload);
            console.log(payload);
            console.log(payload);
            console.log(payload);
            console.log(payload);
            return barcode;
        default:
            return state;
    }

}

export default reducer;
