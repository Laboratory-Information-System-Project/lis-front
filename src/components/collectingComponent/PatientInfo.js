import React from 'react'
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import DefaultData from "../result/DefaultData";

const PatientInfo = ({info}) => {

    console.log(info !== []);
    console.log(info.length === 0);

    return (
        <div>
            <div className={'content-title'}>
                <SickOutlinedIcon/><h3>환자 정보</h3>
            </div>
            {info.length > 0 ? <div className={'table patient-info'}>
                <ul className={'row patient-table'}>
                    <li className={'fl first table-title'}>이름</li>
                    {/*<li className={'fl first-result'}>{info === [] || info === undefined ?*/}
                    {/*    " ": info}</li>*/}
                    <li className={'fl first-result'}>{info !== [] ?
                        info[0]?.patientName : ''}</li>
                    <li className={'fl second table-title'}>주민번호</li>
                    <li className={'fl second-result'}>{info !== [] ? info[0]?.patientResidentNumber : ''}</li>
                    <li className={'fl third table-title'}>키/몸무게</li>
                    <li className={'fl third-result'}>{info !== [] ? info[0]?.patientHeight : ''}
                        {info.length !== 0 ? "/" : ''}
                        {info !== [] ? info[0]?.patientWeight : ''}</li>
                </ul>
                <ul className={'row patient-table'}>
                    <li className={'fl first table-title'}>혈액형</li>
                    <li className={'fl first-result'}>{info !== [] ? info[0]?.patientBloodType : ''}</li>
                    <li className={'fl second table-title'}>나이/성별</li>
                    <li className={'fl second-result'}>{info !== [] ? info[0]?.patientAge : ''}
                        {info.length !== 0 ? "/" : ''}
                        {info !== [] ? info[0]?.patientGender : ''}</li>
                    <li className={'fl third table-title'}>전화번호</li>
                    <li className={'fl third-result'}>{info !== [] ? info[0]?.patientPhoneNumber : ''}</li>
                </ul>
                <ul className={'row patient-table'}>
                    <li className={'fl first table-title'}>주소</li>
                    <li className={'fl address-result'}>{info[0]?.patientAddress}</li>
                </ul>
            </div>: <DefaultData/>}
        </div>


    )
}


export default PatientInfo;