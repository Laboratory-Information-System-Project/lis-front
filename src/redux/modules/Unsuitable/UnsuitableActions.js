import Types from "../../ActionConstants";
import * as UnsuitableAPI from "../../../api/UnsuitableAPI"

const UnsuitableActions = {
    getSamples: () => async (dispatch) => {
        dispatch( { type: Types.GET_SAMPLE} );

        try {
            const sample = await UnsuitableAPI.getSample();

            dispatch({
                type: Types.GET_SAMPLES_SUCCESS,
                payload: sample.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_SAMPLES_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default UnsuitableActions;