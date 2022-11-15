import Types from "../../ActionConstants";
import * as InsertResultAPI from "../../../api/InsertResultAPI";

const ChangeResultAction = {
    getResult:(resultCode) => async(dispatch) => {
        dispatch({type: Types.GET_CHANGERESULT});

        try{
            const InsertResult = await InsertResultAPI.getResult(resultCode);

            dispatch({
                type:Types.GET_CHANGERESULT_SUCCESS,
                payload:InsertResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_CHANGERESULT_FAILURE,
                payload: error.toString()
            })
        }
    },

    getResultList:() => async(dispatch) => {
        dispatch({type: Types.GET_CHANGERESULT});

        try{
            const getResult = await InsertResultAPI.getResultList();

            dispatch({
                type:Types.GET_CHANGERESULT_SUCCESS,
                payload:getResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_CHANGERESULT_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default ChangeResultAction;