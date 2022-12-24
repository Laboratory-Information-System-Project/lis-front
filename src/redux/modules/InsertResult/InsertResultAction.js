import Types from "../../ActionConstants";
import * as InsertResultAPI from "../../../api/InsertResultAPI";
import axios from "axios";

const InsertResultAction = {
    getSearchRegister: (barcode,stDate,endDate) => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_REGISTER});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const searchRegister = await InsertResultAPI.getSearchRegister(barcode,stDate,endDate);

            dispatch({
                type:Types.GET_SEARCH_REGISTER_SUCCESS,
                payload:searchRegister.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_REGISTER_FAILURE,
                payload: error.toString()
            })
        }
    },

    getUnsuitableStatus: () => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_UNSUITABLE_STATUS});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const unsuitableStatus = await InsertResultAPI.getUnsuitableStatus();

            dispatch({
                type:Types.GET_SEARCH_UNSUITABLE_STATUS_SUCCESS,
                payload:unsuitableStatus.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_UNSUITABLE_STATUS_FAILURE,
                payload: error.toString()
            })
        }
    },


    getSearchUnregistered: () => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_UNREGISTERED});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const searchUnregistered = await InsertResultAPI.unregistered();

            dispatch({
                type:Types.GET_SEARCH_UNREGISTERED_SUCCESS,
                payload:searchUnregistered.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_UNREGISTERED_FAILURE,
                payload: error.toString()
            })
        }
    },

    getSearchInspectionType: (orderCode) => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_INSPECTION});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const searchInspectionType = await InsertResultAPI.getSearchInspectionType(orderCode);

            dispatch({
                type:Types.GET_SEARCH_INSPECTION_SUCCESS,
                payload:searchInspectionType.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_INSPECTION_FAILURE,
                payload: error.toString()
            })
        }
    },

    insertConclusionResult:(conclusion) => async(dispatch) => {
        dispatch({type: Types.POST_INSERT_CONCLUSION});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const insertConclusion = await InsertResultAPI.insertConclusionResult(conclusion);

            dispatch({
                type:Types.POST_INSERT_CONCLUSION_SUCCESS,
                payload:insertConclusion.data
            })
        } catch (error){
            dispatch({
                type:Types.POST_INSERT_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    },

    getSearchConclusion:(barcode, orderCode) => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_CONCLUSION});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const allConclusion = await InsertResultAPI.getSearchConclusion(barcode,orderCode);

            dispatch({
                type:Types.GET_SEARCH_CONCLUSION_SUCCESS,
                payload:allConclusion.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    },

    updateConclusion:(conclusion) => async(dispatch) => {
        dispatch({type: Types.PUT_UPDATE_CONCLUSION});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const updateConclusion = await InsertResultAPI.updateConclusion(conclusion);

            dispatch({
                type:Types.PUT_UPDATE_CONCLUSION_SUCCESS,
                payload:updateConclusion.data
            })
        } catch (error){
            dispatch({
                type:Types.PUT_UPDATE_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    },



    updateStatus:(registerCode) => async(dispatch) => {
        dispatch({type: Types.PUT_UPDATE_CONCLUSION});

        try{
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            const updateStatus = await InsertResultAPI.updateStatus(registerCode);

            dispatch({
                type:Types.PUT_UPDATE_CONCLUSION_SUCCESS,
                payload:updateStatus.data
            })
        } catch (error){
            dispatch({
                type:Types.PUT_UPDATE_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default InsertResultAction;