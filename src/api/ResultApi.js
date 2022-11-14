import axios from 'axios'
import { API_URL } from '../utils/constatns/Config'


export const getAllResult = () => {
    return axios.get(`${API_URL}/result/all`) // 전체 조회  
}

export const getResults = (patientNo, startDate, endDate) => {
    return axios.get(`${API_URL}/result?patientNo=${patientNo}&startDate=${startDate}&endDate=${endDate}`) // 날짜 조회     
}           

export const getSearchNoDate = (text) => {
    return axios.get(`${API_URL}/result/${text}`) // 환자번호 조회
}