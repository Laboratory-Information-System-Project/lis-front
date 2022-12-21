import axios from "axios";
import { API_URL } from '../utils/constants/Config';

export const getSample = (barcode, authority) => {
    return axios.get(`http://localhost:8080/unsuitable-service/sample/search?barcode=${barcode}&authority=${authority}`)
}

export const getPrescribe = (barcode, authority) => {
    return axios.get(`http://localhost:8080/unsuitable-service/prescribe/search?barcode=${barcode}&authority=${authority}`)
}

export const getUser = (userName) => {
    return axios.get(`http://localhost:8080/unsuitable-service/user/search/${userName}`)
}

export const getUnsuitableReason = () => {
    return axios.get(`http://localhost:8080/unsuitable-service/unsuitable-reason/`)
}

export const insertUnsuitableSample = (unsuitableSampleList) => {
    return axios.post(`http://localhost:8080/unsuitable-service/unsuitable-reason-management/`, (unsuitableSampleList), {
        headers: {'Content-Type': `application/json`}
    })
     
}
export const getReasonCode = (reasonCode) => {
    return axios.get(`http://localhost:8080/unsuitable-service/reason/search/${reasonCode}`)
}

export const getUnsuitInfo = (barcode) => {
    return axios.get(`http://localhost:8080/unsuitable-service/unsuitable/${barcode}`)
}
