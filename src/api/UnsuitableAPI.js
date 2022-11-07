import axios from "axios";
import { API_URL } from '../utils/constants/Config';

export const getSample = (bacode) => {
    return axios.get(`${API_URL}/board/${bacode}`)
}