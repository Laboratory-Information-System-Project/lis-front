import axios from "axios";

export const findPatientInfo = (data) => {
    console.log(data);
    return axios.get('http://localhost:8000/prescribe-service/patient/' + data);
}

export const findPatientincommingInfo = (data) => {
    return axios.post('http://localhost:8000/prescribe-service/??', data);
}
