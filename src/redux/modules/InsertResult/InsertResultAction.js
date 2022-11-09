import Types from "../../ActionConstants";
import * as InsertResultAPI from "../../../api/InsertResultAPI";

const InsertResultAction = {
    getAllPatients: () => async(dispatch) => {
        dispatch({type: Types.GET_INSERTRESULTS});

        try{
            const InsertResult = await InsertResultAPI.getAllPatient();

            dispatch({
                type:Types.GET_INSERTRESULTS_SUCCESS,
                payload:InsertResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_INSERTRESULTS_FAILURE,
                payload: error.toString()
            })
        }
    },

    searchPatients: (bacode) => async(dispatch) => {
        dispatch({type: Types.GET_INSERTRESULTS});

        try{
            const InsertResult = await InsertResultAPI.searchPatient(bacode);

            dispatch({
                type:Types.GET_INSERTRESULTS_SUCCESS,
                payload:InsertResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_INSERTRESULTS_FAILURE,
                payload: error.toString()
            })
        }
    },

    updateResult: (bacode) => async(dispatch) => {
        dispatch({type: Types.GET_INSERTRESULTS});

        try{
            const InsertResult = await InsertResultAPI.updateContent(bacode);

            dispatch({
                type:Types.GET_INSERTRESULTS_SUCCESS,
                payload:InsertResult.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_INSERTRESULTS_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default InsertResultAction;