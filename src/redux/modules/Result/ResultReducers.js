import Types from '../../ActionConstants';

const initialState = {
    resultInfo: {
        loading: false,
        data: {
            resultNo: '',
            patientNo: '',
            patientName: '',
            patientPhoneNumber: '',
            registerDt: '',
            sampleName: '',
            prescribeDt: '',
            inspectionName: '',
            figures: '',
            baseline: '',
            unit: '',
            note: '',
            sampleNote: '',
        },
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_SEARCH_RESULTS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: true,
                },
            };

        case Types.GET_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: payload,
                },
            };

        case Types.GET_SEARCH_RESULTS_FAILURE:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };

        case Types.GET_RESULTS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: true,
                },
            };

        case Types.GET_RESULTS_SUCCESS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: payload,
                },
            };

        case Types.GET_RESULTS_FAILURE:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;
