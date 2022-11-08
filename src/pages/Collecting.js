import react from 'react';
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import '../styles/collecting.scss'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

const Collecting = () => {
    return (
        <div className={'collecting-wrap'}>

            <div className={'max-wrap'}>
                <div className={'title-wrap'}>
                    <ContentPasteSearchOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content first-line'}>
                    <div className={'input-patientNumber left'}>
                        <div className={'content-title'}>
                            <SearchOutlinedIcon/>
                            <h3>조회 조건</h3>
                        </div>
                        <form className={'input-form'}>
                            <select defaultValue={'전체'}>
                                <option value={'전체'}>전체</option>
                                <option value={'입원'}>입원</option>
                                <option value={'외래'}>외래</option>
                                <option value={'응급'}>응급</option>
                            </select>
                            <input type={"text"}/>
                            <input type={"submit"}/>
                        </form>
                    </div>

                    <div className={'patient-info right'}>
                        <div className={'content-title'}>
                            <SickOutlinedIcon/><h3>환자 정보</h3>
                        </div>
                        <div className={'table'}>
                            <ul className={'patient-info-table'}>
                                <li className={'fl first table-title'}>이름</li>
                                <li className={'fl first-result'}>이동훈</li>
                                <li className={'fl second table-title'}>주민번호</li>
                                <li className={'fl second-result'}>880926-1******</li>
                                <li className={'fl third table-title'}>키/몸무게</li>
                                <li className={'fl third-result'}>180/95</li>
                            </ul>
                            <ul className={'patient-info-table'}>
                                <li className={'fl first table-title'}>혈액형</li>
                                <li className={'fl first-result'}>O형</li>
                                <li className={'fl second table-title'}>나이/성별</li>
                                <li className={'fl second-result'}>35/M</li>
                                <li className={'fl third table-title'}>전화번호</li>
                                <li className={'fl third-result'}>010-9665-4985</li>
                            </ul>
                            <ul className={'patient-info-table'}>
                                <li className={'fl first table-title'}>주소</li>
                                <li className={'fl address-result'}>부산광역시 수영구 100-3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'main-content second-line'}>
                    {/*FIXME : classname */}
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
                            <ul>
                                <li className={'fl'}></li>
                                <li className={'fl'}></li>
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