import axios from 'axios';
import {API_URL} from "../utils/constatns/Config";


export const getAllPatient = () =>{
    return axios.get(`${API_URL}/board/all`)
}

export const searchPatient = (bacode) =>{
    return axios.get(`${API_URL}/board/${bacode}`)
}

export const updateContent = (bacode) =>{
    return axios.put(`${API_URL}/board/${bacode}`)
}