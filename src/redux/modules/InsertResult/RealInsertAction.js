import Types from "../../ActionConstants";
import * as InsertResultAPI from "../../../api/InsertResultAPI";

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
    }
}

export default RealInsertAction;