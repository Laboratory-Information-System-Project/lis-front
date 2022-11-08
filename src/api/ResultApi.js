import axios from 'axios'
import { API_URL } from '../utils/constatns/Config'

// 모든 정보를 다 불러온다
export const getAllResult = () => {
    return axios.get(`${API_URL}/result/all`) // 전체 조회  
}

// 환자번호 조회
export const getResult = (resultNo) => {
    return axios.get(`${API_URL}/result/${resultNo}`) // 환자번호 조회  
}