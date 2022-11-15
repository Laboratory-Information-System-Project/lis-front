import axios from 'axios';
import {API_URL} from "../utils/constants/Config";


export const getAllPatient = () =>{
    return axios.get(`${API_URL}/board/all`)
}

export const searchPatient = (barcode, stDate, endDate) =>{
    return axios.get(`${API_URL}/board?barcode=${barcode}&stDate=${stDate}&endDate=${endDate}`)
}

export const searchNoDate = (text) =>{
    return axios.get(`${API_URL}/board/${text}`)
}

export const insertResult = (resultData) =>{
    return axios.post(`${API_URL}/board`, resultData)
}

export const getResult = (resultCode) =>{
    return axios.get(`${API_URL}/board/result/${resultCode}`)
}

export const updateResult = (resultData) =>{
    return axios.post(`${API_URL}/board/result`, resultData)
}

export const getResultList = () =>{
    return axios.get(`${API_URL}/board/result/all`)
}