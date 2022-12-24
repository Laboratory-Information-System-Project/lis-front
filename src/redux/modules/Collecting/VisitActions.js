import * as CollectingApi from "../../../api/CollectingApi";
import Types from "../../ActionConstants";

const VisitActions = {
    getVisitData: (patientNo, visitStatus) => async (dispatch) => {
        try {
            const result = await CollectingApi.findPatientVisitInfo(patientNo, visitStatus);

            if (!result) throw new Error("can not read visit");

            dispatch({
                type: Types.GET_VISIT_INFO,
                payload: result.data
            })
        } catch (error) {
        }
    },
    initVisitInfo: ()=> (dispatch) =>{

        dispatch({
                type: Types.INIT_VISIT_INFO,
                payload: ''
            }
        )
    }
}

export default VisitActions;