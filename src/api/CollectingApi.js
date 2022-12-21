
import axios from "axios";
import {API_URL} from "../utils/constants/Config";


export const findPatientInfo = (data, searchCon) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;

    return axios.get(`${API_URL}` + '/data-service/patient/info/' +
        data +  '/' + searchCon);
}

export const findPrescribeInfo = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.get(`${API_URL}` + '/data-service/prescribe/' + data);
}

export const newBarcodeInfo = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.post(`${API_URL}` + '/collecting-service/barcode', data);
}

export const cancelBarcode = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.put(`${API_URL}` + '/collecting-service/barcode', data);
}

export const newCollecting = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.put(`${API_URL}` + '/collecting-service/collecting', data);
}

export const cancelCollecting = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.put(`${API_URL}` + '/collecting-service/collecting/canceldate', data);
}

export async function getBarcode(data) {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.get(`${API_URL}` + '/data-service/barcode?prescribeCodeList=' + data);
}

export async function findPatientVisitInfo(data, visitStatus) {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.get(`${API_URL}` + "/data-service/visit/" + data + '/' + visitStatus);
}