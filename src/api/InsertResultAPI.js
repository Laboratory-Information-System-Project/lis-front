import axios from 'axios';
import {API_URL} from "../utils/constants/Config";

export const getTodayRegister = () =>{
    return axios.get(`${API_URL}/inspection-service/register/today`)
}

export const getSearchRegister = (barcode, stDate, endDate) =>{
    return axios.get(`${API_URL}/inspection-service/register/search?barcode=${barcode}&stDate=${stDate}&endDate=${endDate}`)
}

export const insertConclusionResult = (conclusion) =>{
    return axios.post(`${API_URL}/inspection-service/conclusion`, conclusion)
}

export const getAllConclusion = () =>{
    return axios.get(`${API_URL}/inspection-service/conclusion/all`)
}

export const updateConclusion = (conclusion) =>{
    return axios.put(`${API_URL}/inspection-service/conclusion`, conclusion)
}