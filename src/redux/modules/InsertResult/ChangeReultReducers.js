import Types from "../../ActionConstants";


const initialState ={
    ChangeResultInfo:{
        loading: false,
        data:{
            resultCode:'',
            registerCode:'',
            figures:'',
            inspectionDt:'',
            reportedDt:'',
            note:'',
            sampleNote:''
        }
    }
}

const reducer = (state=initialState, action) =>{
    switch (action.type){
        case Types.GET_CHANGERESULT:
            return{
                ...state,
                ChangeResultInfo: {
                    ...state.ChangeResultInfo,
                    loading: true,
                    data: action.payload //payload : 불러온 데이터 값
                }
            }

        case Types.GET_CHANGERESULT_SUCCESS:
            return{
                ...state,
                ChangeResultInfo: {
                    ...state.ChangeResultInfo,
                    loading: false,
                    data: action.payload //payload : 불러온 데이터 값
                }
            }

        case Types.GET_CHANGERESULT_FAILURE:
            return {
                ...state,
                ChangeResultInfo: {
                    ...state.ChangeResultInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }

        default:
            return state;
    }
}

export default reducer;