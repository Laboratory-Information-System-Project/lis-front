import * as CollectingApi from "../../../api/CollectingApi";
import Types from "../../ActionConstants";

const PrescribeActions = {
    getPrescribeData: (visitNo, visitStatus) => async (dispatch) => {
        // dispatch({type: Types.GET_PRESCRIBE_INFO});
        try {
            const result = await CollectingApi.findPrescribeInfo(visitNo, visitStatus);

            if(!result) throw new Error("can not find prescribe");

            console.log("result--------------");
            console.log(result.data);
            dispatch({
                type: Types.GET_PRESCRIBE_INFO,
                payload: result.data
            })
        }catch (error){

        }
    }
}

export default PrescribeActions;