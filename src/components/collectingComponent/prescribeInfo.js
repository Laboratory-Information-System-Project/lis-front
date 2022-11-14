import React from 'react'
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

const PrescribeInfo = () => {
    return (  <div className={'patient-order right'}>
        <div className={'content-title'}>
            <LocalHospitalOutlinedIcon/>
            <h3>처방 정보</h3>
        </div>
        <div className={'table'}>
            <ul className={'patient-table'}>
                <li className={'fl table-title blank'}></li>
                <li className={'fl table-title blank'}></li>
                <li className={'fl table-title'}>상태</li>
                <li className={'fl table-title'}>처방일자</li>
                <li className={'fl table-title'}>진료과</li>
                <li className={'fl table-title'}>입/외</li>
                <li className={'fl table-title'}>처방코드</li>
                <li className={'fl table-title'}>검체코드</li>
                <li className={'fl table-title'}>용기명</li>
                <li className={'fl table-title'}>분류</li>
                <li className={'fl table-title'}>처방의</li>
                <li className={'fl table-title'}>검사명</li>
            </ul>
        </div>
    </div>);
}

export default PrescribeInfo;