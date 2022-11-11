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
        dispatch ({ type: Types.GET_USERS });

        try {
            const user = await UnsuitableAPI.getUser(name);

            dispatch({
                type: Types.GET_USERS_SUCCESS,
                payload: user.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_USERS_FAILURE,
                payload: error.toString()
            })
        }
    },

    getOneUser: (pickUser) =>  async (dispatch) => {
        dispatch ({ type: Types.GET_USER});

        try{
            const getSelectUser = await pickUser;

            dispatch({
                type: Types.GET_USER_SUCCESS,
                payload: getSelectUser

            })
        } catch (error) {
            dispatch({
                type: Types.GET_USER_FAILURE,
                payload: error.toString()
            })
        }

    },

    getSample: (sampleDetail) => async (dispatch) => {
        dispatch ({type: Types.GET_UNSUITABLE_SAMPLE});

        try{
            const getUnsuitableSample = await sampleDetail;

            dispatch({
                type: Types.GET_UNSUITABLE_SAMPLE_SUCCESS,
                payload: getUnsuitableSample
            })
        } catch (error) {
            dispatch({
                type: Types.GET_UNSUITABLE_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    }

 
}

export default UnsuitableActions;