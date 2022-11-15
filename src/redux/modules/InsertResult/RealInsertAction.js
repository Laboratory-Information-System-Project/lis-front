import Types from "../../ActionConstants";
import * as InsertResultAPI from "../../../api/InsertResultAPI";
import {getResultList} from "../../../api/InsertResultAPI";

const RealInsertAction = {
   insertResult:(resultData) => async(dispatch) => {
        dispatch({type: Types.GET_REALINSERT});

        try{
            const InsertResult = await InsertResultAPI.insertResult(resultData);

            dispatch({
                type:Types.GET_REALINSERT_SUCCESS,
                payload:InsertResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_REALINSERT_FAILURE,
                payload: error.toString()
            })
        }
    },

    updateResult:(resultData) => async(dispatch) => {
        dispatch({type: Types.GET_REALINSERT});

        try{
            const UpdateResult = await InsertResultAPI.updateResult(resultData);

            dispatch({
                type:Types.GET_REALINSERT_SUCCESS,
                payload:UpdateResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_REALINSERT_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default RealInsertAction;