import React, {useState} from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {ToastError} from "./Toast";
import {ToastContainer} from "react-toastify";

const InsertPatientNo = ({buttonForPatientInfo}) => {

    const [patientNo, setPatientNo] = useState('');
    const [visitStatus, setVisitStatus] = useState('전체');
    const regex = /^[0-9]+$/;

    const setValue = (e) => {
            setPatientNo(e.target.value);
    };

    const selectBoxValue = () => {
        const visitStatus = document.getElementById('patientStatus');
        setVisitStatus(visitStatus.options[visitStatus.selectedIndex].text);
    }

    const getPatientInfo = ()=> {
        if (!regex.test(patientNo) &&
            patientNo !== '') {
            ToastError("숫자만 입력해주세요");
        } else {
            buttonForPatientInfo(patientNo, visitStatus);
        }
    }

    const EnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!regex.test(patientNo) &&
                patientNo !== '') {
                ToastError("숫자만 입력해주세요");
            } else {
                buttonForPatientInfo(patientNo, visitStatus);
            }
        }
    }



    return (
        <div className={'input-patientNumber left-table'}>
            <div className={'content-title'}>
                <SearchOutlinedIcon/>
                <h3>조회 조건</h3>
            </div>
            <div className={'input-form'}>
                <select defaultValue={'전체'} id={'patientStatus'} onChange={selectBoxValue}>
                    <option value={'전체'}>전체</option>
                    <option value={'입원'}>입원</option>
                    <option value={'외래'}>외래</option>
                    <option value={'응급'}>응급</option>
                </select>
                <input type={"text"} className={'patientNo-input'} placeholder={'환자번호를 입력하세요'} onKeyDown={EnterKeyPress} onChange={setValue}/>
                <input type={"submit"} onClick={getPatientInfo} className={'patient-btn'}/>
        </div>

            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default InsertPatientNo;