import axios from 'axios';
import {GATEWAY_URL} from "../utils/constants/Config";

export const getTodayRegister = () =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/register/today`)
}

export const getSearchRegister = (barcode, stDate, endDate) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/register/search?barcode=${barcode}&stDate=${stDate}&endDate=${endDate}`)
}

export const getSearchInspectionType = (barcode) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/inspection-type/search?barcode=${barcode}`)
}

export const getSearchConclusion = (barcode) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/conclusion/search?barcode=${barcode}`)
}

export const insertConclusionResult = (conclusion) =>{
    return axios.post(`${GATEWAY_URL}/inspection-service/conclusion`, conclusion)
}

export const updateConclusion = (conclusion) =>{
    return axios.put(`${GATEWAY_URL}/inspection-service/conclusion`, conclusion)
}