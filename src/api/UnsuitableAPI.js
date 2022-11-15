import axios from "axios";
import { API_URL } from '../utils/constants/Config';

export const getSample = (bacode) => {
    return axios.get(`${API_URL}/board/bacode/${bacode}`)
}

export const getPrescribe = (bacode) => {
    return axios.get(`${API_URL}/board/bacode/${bacode}`)
}

export const getUser = (name) => {
    return axios.get(`${API_URL}/board/user/${name}`)
}

export const insertUnsuitableSample = (unsuitInfo) => {
    return axios.post(`${API_URL}/board`, unsuitInfo)
}