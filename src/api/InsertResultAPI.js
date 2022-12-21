import axios from 'axios';
import {API_URL} from "../utils/constants/Config";

export const unregistered = () =>{
    return axios.get(`${API_URL}/inspection-service/unregistered/search`)
}

export const getSearchRegister = (barcode, stDate, endDate) =>{
    return axios.get(`${API_URL}/inspection-service/register/search?barcode=${barcode}&stDate=${stDate}&endDate=${endDate}`)
}

export const getUnsuitableStatus = () =>{
    return axios.get(`${API_URL}/inspection-service/UnsuitableStatus`)
}

export const getSearchInspectionType = (orderCode) =>{
    return axios.get(`${API_URL}/inspection-service/inspection-type/search?orderCode=${orderCode}`)
}

export const getSearchConclusion = (barcode) =>{
    return axios.get(`${API_URL}/inspection-service/conclusion/search?barcode=${barcode}&`)
}

export const insertConclusionResult = (conclusion) =>{
    return axios.post(`${API_URL}/inspection-service/conclusion`, conclusion)
}

export const updateConclusion = (conclusion) =>{
    return axios.put(`${API_URL}/inspection-service/conclusion`, conclusion)
}

export const updateStatus = (registerCode) =>{
    return axios.put(`${API_URL}/inspection-service/status?registerCode=${registerCode}`)
}