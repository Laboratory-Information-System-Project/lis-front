import React from 'react';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';

const SmsDataItem = ({ data, close }) => {
    return (
        <div className="phone-content">
            <p>
                <ForwardToInboxSharpIcon />
                메세지 내용
            </p>
            <textarea
                className="message"
                defaultValue={`안녕하세요 더존 병원입니다. ${data.patientName} 님의 검사결과가 나왔습니다. 확인을 위해 병원에 방문 부탁드리겠습니다. 좋은 하루 되세요 ^^*`}
            />

            <footer>
                <p className="patient-no">환자 번호: {data.patientNo}</p>
                <p className="patient-name">수신 인: {data.patientName} 님</p>
                <p className="phone-num">
                    수신 번호: {data.patientPhoneNumber}
                    {/* <input type="text" /> */}
                </p>

                <div className="ft-btn-wrap">
                    <button onClick={close}>닫기</button>
                    <button>보내기</button>
                </div>
            </footer>
        </div>
    );
};

export default SmsDataItem;
