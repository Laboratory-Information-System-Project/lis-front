import Types from "../../ActionConstants";

const initialState ={
    InsertResultInfo:{
        loading: false,
        data:{
            bnum:'',
            btitle:'',
            bwriter:'',
            bcontent:''
        }
    }
}

const reducer = (state=initialState, action) =>{
    switch (action.type){
        case Types.GET_INSERTRESULTS:
            return{
                ...state,
                InsertResultInfo: {
                    ...state.InsertResultInfo,
                    loading: true,
                    data: action.payload //payload : 불러온 데이터 값
                }
            }

        case Types.GET_INSERTRESULTS_SUCCESS:
            return{
                ...state,
                InsertResultInfo: {
                    ...state.InsertResultInfo,
                    loading: false,
                    data: action.payload //payload : 불러온 데이터 값
                }
            }

        case Types.GET_INSERTRESULTS_FAILURE:
            return {
                ...state,
                InsertResultInfo: {
                    ...state.InsertResultInfo,
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