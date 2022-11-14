import Types from "../../ActionConstants";


const initialState ={
    RealInsertInfo:{
        loading: false,
        data:{
            bnum:'',
            registerCode:'',
            figures:'',
            note:'',
            sampleNote:''
        }
    }
}

const reducer = (state=initialState, action) =>{
    switch (action.type){
        case Types.GET_REALINSERT:
            return{
                ...state,
                RealInsertInfo: {
                    ...state.RealInsertInfo,
                    loading: true,
                    data: action.payload //payload : 불러온 데이터 값
                }
            }

        case Types.GET_REALINSERT_SUCCESS:
            return{
                ...state,
                RealInsertInfo: {
                    ...state.RealInsertInfo,
                    loading: false,
                    data: action.payload //payload : 불러온 데이터 값
                }
            }

        case Types.GET_REALINSERT_FAILURE:
            return {
                ...state,
                RealInsertInfo: {
                    ...state.RealInsertInfo,
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