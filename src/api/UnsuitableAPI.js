import axios from "axios";
import { API_URL } from '../utils/constants/Config';

export const getSample = (barcode, authority) => {
    return axios.get(`${API_URL}` + `/unsuitable-service/sample/search?barcode=${barcode}&authority=${authority}`)
}

export const getPrescribe = (barcode, authority) => {
    return axios.get(`${API_URL}` + `/unsuitable-service/prescribe/search?barcode=${barcode}&authority=${authority}`)
}

export const getUser = (userName) => {
    return axios.get(`${API_URL}` + `/unsuitable-service/user/search/${userName}`)
}

export const getUnsuitableReason = () => {
    return axios.get(`${API_URL}` + `/unsuitable-service/unsuitable-reason/`)
}

export const insertUnsuitableSample = (unsuitableSampleList) => {
    return axios.post(`${API_URL}` + `/unsuitable-service/unsuitable-reason-management/`, (unsuitableSampleList), {
        headers: {'Content-Type': `application/json`}
    })
     
}
export const getReasonCode = (reasonCode) => {
    return axios.get(`${API_URL}` + `/unsuitable-service/reason/search/${reasonCode}`)
}

export const getUnsuitInfo = (barcode) => {
    return axios.get(`${API_URL}` + `/unsuitable-service/unsuitable/${barcode}`)
}
