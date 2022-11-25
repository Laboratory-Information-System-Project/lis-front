import axios from "axios";

export const findPatientInfo = (data) => {
    return axios.get('http://localhost:8000/data-service/patient/' + data);
}

export const findPrescribeInfo = (data) => {
    return axios.get('http://localhost:8000/data-service/prescribe/' + data);
}

export const newBarcodeInfo = (data) => {
    console.log("data");
    console.log(data);
    return axios.post('http://localhost:8000/collecting-service/barcode', data);
}