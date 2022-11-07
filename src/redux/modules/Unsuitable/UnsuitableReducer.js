import Types from "../../ActionConstants";

const initialState = {
    unsuitableInfo: {
        loading: false,
        data: {
            b_num: '',
            b_title:'',
            b_writer:'',
            b_content:''
        }
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_SAMPLE:
            return {
                ...state,
                unsuitableInfo: {
                    ...state.unsuitableInfo,
                    loading:true,
                }
            }

        case Types.GET_SAMPLE_SUCCESS:
            return {
                ...state,
                unsuitableInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_SAMPLE_FAILURE:
            return {
                ...state,
                unsuitableInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
        default:
            return state;
    }
}

export default reducer;