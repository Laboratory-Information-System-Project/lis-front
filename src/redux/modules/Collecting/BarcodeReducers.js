import Types from "../../ActionConstants";

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
            console.log("여기!!!!!!!!!!!!!1")
            const barcode = {
                ...state,
                barcodeList: {
                    ...state.barcodeList,
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