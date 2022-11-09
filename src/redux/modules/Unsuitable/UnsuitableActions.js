import Types from "../../ActionConstants";
import * as UnsuitableAPI from "../../../api/UnsuitableAPI"
import UnsuitableUserItem from "../../../components/unsuitable/reasonleft/UnsuitableUserItem";

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

    getOneUser: () =>  async (dispatch) => {
        dispatch ({ type: Types.GET_USER});

        try{
            const getSelectUser = await UnsuitableUserItem.sendUser();

            dispatch({
                type: Types.GET_USER_SUCCESS,
                payload: getSelectUser.data

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