import axios from "axios";
import { API_URL} from "../utils/constants/Config";

export const getPrescribe = (barcode) =>{
    return axios.get(`${API_URL}/data-service/patient/${barcode}`) // 환자 정보 조회
}

export const getCollect = (barcode)=>{
    return axios.get(`${API_URL}/data-service/collect/${barcode}`)
}

export const getCollectdata = (barcode)=>{
    return axios.get(`${API_URL}/data-service/pri/data/${barcode}`)
}