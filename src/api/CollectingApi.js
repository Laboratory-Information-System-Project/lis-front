import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
// axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
// axios.defaults.headers.post["Access-Control-Allow-Methods"] = 'post';
// axios.defaults.headers.post["Access-Control-Allow-Headers"] = '*';

export const findPatientInfo = (data) => {
    console.log(data);
    return axios.get('http://localhost:8000/prescribe-service/patient/' + data);
}

export const findPatientincommingInfo = (data) => {
    return axios.post('http://localhost:8000/prescribe-service/??', data);
}
