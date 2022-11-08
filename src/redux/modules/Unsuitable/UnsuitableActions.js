import Types from "../../ActionConstants";
import * as UnsuitableAPI from "../../../api/UnsuitableAPI"

const UnsuitableActions = {
    getSamples: (bacode) => async (dispatch) => {
        dispatch( { type: Types.GET_SAMPLE} );

        try {
            const sample = await UnsuitableAPI.getSample(bacode);

            dispatch({
                type: Types.GET_SAMPLE_SUCCESS,
                payload: sample.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    },

    getPrescribes: (bacode) => async (dispatch) => {
        dispatch ({ type: Types.GET_PRESCRIBE });

        try {
            const prescribe = await UnsuitableAPI.getPrescribe(bacode);

            dispatch({
                type: Types.GET_PRESCRIBE_SUCCESS,
                payload: prescribe.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_PRESCRIBE_FAILURE,
                payload: error.toString()
            })
        }
    },

    getUsers: (name) => async (dispatch) => {
        dispatch ({ type: Types.GET_USER });

        try {
            const user = await UnsuitableAPI.getUser(name);

            dispatch({
                type: Types.GET_USER_SUCCESS,
                payload: user.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_USER_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default UnsuitableActions;