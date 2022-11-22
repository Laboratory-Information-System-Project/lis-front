import axios from "axios";
import { API_URL, DATA_URL } from '../utils/constants/Config';

export const getSample = (barcode) => {
    return axios.get(`${DATA_URL}/data-service/sample/search/${barcode}`)
}

export const getPrescribe = (barcode) => {
    return axios.get(`${DATA_URL}/data-service/prescribe/search/${barcode}`)
}

export const getUser = (userName) => {
    return axios.get(`${DATA_URL}/data-service/user/search/${userName}`)
}

export const getUnsuitableReason = () => {
    return axios.get(`${DATA_URL}/data-service/unsuitable-reason/`)
}

export const insertUnsuitableSample = (unsuitInfo) => {
    return axios.post(`http://localhost:8001/collecting-service/unsuitable-reason-management/`, unsuitInfo)
}

