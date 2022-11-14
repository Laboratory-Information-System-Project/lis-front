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

    searchPatients: (barcode,stDate,endDate) => async(dispatch) => {
        dispatch({type: Types.GET_INSERTRESULTS});

        try{
            const InsertResult = await InsertResultAPI.searchPatient(barcode,stDate,endDate);

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

    searchNoDate: (text) => async(dispatch) => {
        dispatch({type: Types.GET_INSERTRESULTS});

        try{
            const InsertResult = await InsertResultAPI.searchNoDate(text);

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