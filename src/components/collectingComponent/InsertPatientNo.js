import React, {useState} from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import '../../styles/collecting.scss'
import {findPatientInfo} from "../../api/CollectingApi";

const InsertPatientNo = () => {

    const [patientNo, setPatientNo] = useState('');
    let value;

    const postPatientNo = (e) => {
        findPatientInfo(patientNo).then(resp => console.log(resp));
        e.preventDefault();
    }

    const setValue = (e) => {
        setPatientNo(e.target.value);
    };

    return (
        <div className={'input-patientNumber left'}>
            <div className={'content-title'}>
                <SearchOutlinedIcon/>
                <h3>조회 조건</h3>
            </div>
            <form className={'input-form'} onSubmit={postPatientNo}>
                <select defaultValue={'전체'} name={'patientStatus'}>
                    <option value={'전체'}>전체</option>
                    <option value={'입원'}>입원</option>
                    <option value={'외래'}>외래</option>
                    <option value={'응급'}>응급</option>
                </select>
                <input type={"text"} placeholder={'환자번호를 입력하세요'} onChange={setValue}/>
                <input type={"submit"}/>
            </form>
        </div>
    );
}

export default InsertPatientNo;