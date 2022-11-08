import Types from "../../ActionConstants";
import * as ResultApi from "../../../api/ResultApi";

const ResultActions = {

    getResult: (data) => async (dispatch) => {

        dispatch({ type: Types.GET_RESULT });

        try {
            const result = await ResultApi.getResult(data);

            // if (!result) throw new Error(`Error adding patitent: ${result}`); 

            dispatch({
                type: Types.GET_RESULT_SUCCESS,
                payload: result.data
            })

        } catch (error) {
            dispatch({
                type: Types.GET_RESULT_FAILURE,
                payload: error.toString()
            })
        }
    },

    getResults: () => async (dispatch) => {
        dispatch({ type: Types.GET_RESULTS});

        try {
            const result = await ResultApi.getAllResult();
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리
            
            dispatch({
                type: Types.GET_RESULTS_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_RESULTS_FAILURE,
                payload: error.toString()
            })
        }
    }
}


export default ResultActions;