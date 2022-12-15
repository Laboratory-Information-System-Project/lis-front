import Types from '../../ActionConstants';
import * as ResultApi from '../../../api/ResultApi';

const ResultActions = {
    getDateSearch:
        (patientNo, startDate, endDate, radioDate) => async (dispatch) => {
            dispatch({ type: Types.GET_RESULTS });

            try {
                const result = await ResultApi.getResults(
                    patientNo,
                    startDate,
                    endDate,
                    radioDate,
                );

                if (!result)
                    throw new Error(`Error adding patitent: ${result}`);

                dispatch({
                    type: Types.GET_RESULTS_SUCCESS,
                    payload: result.data,
                });
            } catch (error) {
                dispatch({
                    type: Types.GET_RESULTS_FAILURE,
                    payload: error.toString(),
                });
            }
        },

    getNoDateSearch: (text) => async (dispatch) => {
        dispatch({ type: Types.GET_SEARCH_RESULTS });

        try {
            const result = await ResultApi.getSearchNoDate(text);
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.GET_SEARCH_RESULTS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULTS_FAILURE,
                payload: error.toString(),
            });
        }
    },

    postSendSms: (to, content) => async (dispatch) => {
        dispatch({ type: Types.POST_RESULT_SMS });

        try {
            const result = await ResultApi.postSendMessage(to, content);
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.POST_RESULT_SMS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.POST_RESULT_SMS_FAILURE,
                payload: error.toString(),
            });
        }
    },
    getSmsData: () => async (dispatch) => {
        dispatch({ type: Types.GET_SMSDATA });

        try {
            const result = await ResultApi.getSmsData();
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.GET_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_SMSDATA_FAILURE,
                payload: error.toString(),
            });
        }
    },
    postSmsData: (smsTitle, smsContent) => async (dispatch) => {
        dispatch({ type: Types.POST_SMSDATA });

        try {
            const result = await ResultApi.postSmsData(smsTitle, smsContent);
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.POST_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.POST_SMSDATA_FAILURE,
                payload: error.toString(),
            });
        }
    },
    deleteSmsData: (smsNo) => async (dispatch) => {
        dispatch({ type: Types.DELETE_SMSDATA });

        try {
            const result = await ResultApi.deleteSmsData(smsNo);
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.DELETE_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.DELETE_SMSDATA_FAILURE,
                payload: error.toString(),
            });
        }
    },
    editSmsData: (smsNo, smsTitle, smsContent) => async (dispatch) => {
        dispatch({ type: Types.PUT_SMSDATA });

        try {
            const result = await ResultApi.editSmsData(
                smsNo,
                smsTitle,
                smsContent,
            );
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.PUT_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.PUT_SMSDATA_FAILURE,
                payload: error.toString(),
            });
        }
    },
};

export default ResultActions;
