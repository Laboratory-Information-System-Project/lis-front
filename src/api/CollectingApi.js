import axios from "axios";


export const findPatientInfo = (data, searchCon) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;

    return axios.get('http://localhost:8080/data-service/patient/info/' +
        data +  '/' + searchCon);
}

export const findPrescribeInfo = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.get('http://localhost:8080/data-service/prescribe/' + data);
}

export const newBarcodeInfo = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.post('http://localhost:8080/collecting-service/barcode', data);
}

export const cancelBarcode = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.put('http://localhost:8080/collecting-service/barcode', data);
}

export const newCollecting = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.put('http://localhost:8080/collecting-service/collecting', data);
}

export const cancelCollecting = (data) => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.put('http://localhost:8080/collecting-service/collecting/canceldate', data);
}

export async function getBarcode(data) {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.get('http://localhost:8080/data-service/barcode?prescribeCodeList=' + data);
}

export async function findPatientVisitInfo(data, visitStatus) {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'AccessToken',
    )}`;
    return axios.get("http://localhost:8080/data-service/visit/" + data + '/' + visitStatus);
}