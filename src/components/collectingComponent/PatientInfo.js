import React from 'react'
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";

const PatientInfo = ({info}) => {

    console.log("patientInfo");
    console.log(info);

    return (
        <div className={'patient-info right'}>
            <div className={'content-title'}>
                <SickOutlinedIcon/><h3>환자 정보</h3>
            </div>
            <div className={'table'}>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>이름</li>
                    {/*<li className={'fl first-result'}>{info === [] || info === undefined ?*/}
                    {/*    " ": info}</li>*/}
                    <li className={'fl first-result'}>{info !== [] ?
                        info?.patient?.patientName : ''}</li>
                    <li className={'fl second table-title'}>주민번호</li>
                    <li className={'fl second-result'}>{info !== [] ?info?.patient?.patientResidentNumber : ''}</li>
                    <li className={'fl third table-title'}>키/몸무게</li>
                    <li className={'fl third-result'}>{info !== [] ?info?.patient?.patientHeight : ''}/
                        {info !== [] ? info?.patient?.patientWeight:''}</li>
                </ul>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>혈액형</li>
                    <li className={'fl first-result'}>{info !== [] ?info?.patient?.patientBloodType : ''}</li>
                    <li className={'fl second table-title'}>나이/성별</li>
                    <li className={'fl second-result'}>{info !== [] ?info?.patient?.patientAge : ''}/
                        {info !== [] ?info?.patient?.patientGender : ''}</li>
                    <li className={'fl third table-title'}>전화번호</li>
                    <li className={'fl third-result'}>{info !== [] ?info?.patient?.patientPhoneNumber: ''}</li>
                </ul>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>주소</li>
                    <li className={'fl address-result'}>{info?.patient?.patientAddress}</li>
                </ul>
            </div>
        </div>


    )
}


export default PatientInfo;