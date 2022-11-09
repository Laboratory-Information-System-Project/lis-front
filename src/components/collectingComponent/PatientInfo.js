import React from 'react'
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";

const PatientInfo = () => {
    return (
        <div className={'patient-info right'}>
            <div className={'content-title'}>
                <SickOutlinedIcon/><h3>환자 정보</h3>
            </div>
            <div className={'table'}>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>이름</li>
                    <li className={'fl first-result'}>이동훈</li>
                    <li className={'fl second table-title'}>주민번호</li>
                    <li className={'fl second-result'}>880926-1******</li>
                    <li className={'fl third table-title'}>키/몸무게</li>
                    <li className={'fl third-result'}>180/95</li>
                </ul>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>혈액형</li>
                    <li className={'fl first-result'}>O형</li>
                    <li className={'fl second table-title'}>나이/성별</li>
                    <li className={'fl second-result'}>35/M</li>
                    <li className={'fl third table-title'}>전화번호</li>
                    <li className={'fl third-result'}>010-9665-4985</li>
                </ul>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>주소</li>
                    <li className={'fl address-result'}>부산광역시 수영구 100-3</li>
                </ul>
            </div>
        </div>
    )
}

export default PatientInfo;