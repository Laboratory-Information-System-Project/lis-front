import Types from "../../ActionConstants";

const initialState = {
    unsuitableInfo: {
        loading: false,
        data: {
            bnum: '',
            btitle:'',
            bwriter:'',
            bcontent:''
        }
    },
    prescribeInfo: {
        loading: false,
        data: {
            bnum: '',
            prescribeCode: '',
            visitCode: '',
            inspectionCode: '',
            statusCode: '',
            prescribeContents: '',
            prescribeDt: '',
            doctorId: ''
        }
    },

    userInfo: {
        loading: false,
        data: {
            userId: '',
            name: '',
            authority: '',
            userEmail: '',
        }
    },

    oneUserInfo: {
        loading: false,
        data: {
            userId: '',
            name: '',
            authority: '',
        }
    },

    unsuitableSampleInfo: {
        loading: false,
        data: { }
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

        case Types.GET_PRESCRIBE:
            return{
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading:true,
                }
            }
        
        case Types.GET_PRESCRIBE_SUCCESS:
            return {
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.GET_PRESCRIBE_FAILURE:
            return {
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_USERS:
            return{
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading:true,
                }
            }
        
        case Types.GET_USERS_SUCCESS:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.GET_USERS_FAILURE:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }


        case Types.GET_USER:
            return {
                ...state,
                oneUserInfo: {
                    ...state.oneUserInfo,
                    loading: true,
                }
            }

        case Types.GET_USER_SUCCESS:
            return {
                ...state,
                oneUserInfo: {
                    ...state.oneUserInfo,
                    loading: false,
                    data: payload
                }
            }

        case Types.GET_USER_FAILURE:
            return {
                ...state,
                oneUserInfo: {
                    ...state.oneUserInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
        
        case Types.GET_UNSUITABLE_SAMPLE:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableSampleInfo,
                    loading: true
                }
            }

        case Types.GET_UNSUITABLE_SAMPLE_SUCCESS:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.GET_UNSUITABLE_SAMPLE_FAILURE:
            return {
                ...state,
                unsuitableSampleInfo: {
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