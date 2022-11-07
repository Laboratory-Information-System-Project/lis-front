import axios from 'axios'
import { API_URL } from '../utils/constatns/Config'

// 모든 정보를 다 불러온다
export const getAllResult = () => {
    return axios.get(`${API_URL}/results`) // 전체 조회  
}

// export const getAllResult = (result_no) => {
//     return axios.get(`${API_URL}/results/${result_no}`) // 전체 조회  
// }