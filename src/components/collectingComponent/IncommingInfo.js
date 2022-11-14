import React from 'react';
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const IncommingInfo = () => {
    return (    <div className={'patient-comming left'}>
        <div className={"content-title"}>
            <AssignmentOutlinedIcon/>
            <h3>내원 정보</h3>
        </div>
        <div className={"table"}>
            <ul className={"first-li"}>
                <li className={"fl table-title comming-table"}>진료과</li>
                <li className={"fl table-title comming-table"}>처방일자</li>
                <li className={"fl table-title comming-table"}>진료의</li>
                <li className={"fl table-title comming-table"}>병동</li>
            </ul>
            {/*FIXEME 아래는 스크롤 처리 */}
            <ul className={"second-li"}>
                <li className={"fl comming-table"}>진료과</li>
                <li className={"fl comming-table"}>처방일자</li>
                <li className={"fl comming-table"}>진료의</li>
                <li className={"fl comming-table"}>병동</li>
            </ul>
        </div>
    </div>);
}

export default IncommingInfo;