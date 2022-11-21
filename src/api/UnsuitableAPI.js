import axios from "axios";
import { API_URL } from '../utils/constants/Config';

export const getSample = (barcode) => {
    return axios.get(`http://localhost:8001/collecting-service/sample/${barcode}`)
}

export const getPrescribe = (prescribeCode) => {
    return axios.get(`http://localhost:8002/prescribe-service/unsuitable/prescribe/${prescribeCode}`)
}

export const getUser = (name) => {
    return axios.get(`http://localhost:8003/user-service/unsuitable/users/${name}`)
}

export const insertUnsuitableSample = (unsuitInfo) => {
    return axios.post(`${API_URL}/board`, unsuitInfo)
}

