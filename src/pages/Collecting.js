import react from 'react';
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import '../styles/collecting.scss'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import InsertPatientNo from "../components/collectingComponent/InsertPatientNo";
import PatientInfo from "../components/collectingComponent/PatientInfo";

const Collecting = () => {
    return (
        <div className={'collecting-wrap'}>

            <div className={'max-wrap'}>
                <div className={'title-wrap'}>
                    <ContentPasteSearchOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content first-line'}>
                    <InsertPatientNo/>
                    <PatientInfo/>
                </div>
                <div className={'main-content second-line'}>
                    {/*IXME : classname */}
                    <div className={'patient-comming left'}>
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
                    </div>
                    <div className={'patient-order right'}>
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
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Collecting;