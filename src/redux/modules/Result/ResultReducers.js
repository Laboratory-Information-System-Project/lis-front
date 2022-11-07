import Types from "../../ActionConstants";

const initialState = {
    resultInfo: {
        loading: false,
        data: {
            result_no: '',
            register_code: '',
            figures: '',
            inspection_dt: '',
            note: '',
            sample_note: ''
        }
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_RESULTS:
                return {
                    ...state,
                    resultInfo: {
                        ...state.resultInfo,
                        loading: true,
                    }
                }

        case Types.GET_RESULTS_SUCCESS:
                return {
                    ...state,
                    resultInfo: {
                        ...state.resultInfo,
                        loading: false, 
                        data: payload
                    }
                }

        case Types.GET_RESULTS_FAILURE:
                return {
                    ...state,
                    resultInfo: {
                        ...state.resultInfo,
                        loading: false,
                        data: {
                            error: payload
                        }
                    }
                }
        default:
            return state;
    };
};


export default reducer;