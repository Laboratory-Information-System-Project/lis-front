import React from 'react';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import { useDispatch, useSelector } from 'react-redux';
import ResultActions from '../../redux/modules/Result/ResultActions';
import Swal from 'sweetalert2';

const SmsDataItem = ({ close, selectSmsData, selectSmsDataHandler }) => {
    const dispatch = useDispatch();
    const { resultInfo, smsInfo } = useSelector((state) => state.ResultInfo);

    const onSubmit = async (to, content) => {
        to = resultInfo.data[0].patientPhoneNumber.split('-').join('');

        content = selectSmsData;
        dispatch(ResultActions.postSendSms(to, content));

        if (smsInfo.data.requestId === null) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'warning',
                title: 'SMS 전송을 실패 하였습니다.',
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'success',
                title: 'SMS 전송을 성공 했습니다.',
            });
        }
    };

    return (
        <div className='phone-content'>
            <p>
                <ForwardToInboxSharpIcon />
                SMS 내용입력
            </p>
            <textarea
                className='message'
                value={selectSmsData}
                onChange={selectSmsDataHandler}
                placeholder='문자 내용을 선택해주세요.'
            />

            <footer>
                <p className='phone-text patient-no'>
                    환자 번호: {resultInfo.data[0].patientNo}
                </p>
                <p className='phone-text patient-name'>
                    수신 인: {resultInfo.data[0].patientName} 님
                </p>
                <p className='phone-text phone-num'>
                    수신 번호: {resultInfo.data[0].patientPhoneNumber}
                </p>

                <div className='ft-btn-wrap'>
                    <button onClick={close}>닫기</button>
                    <button onClick={onSubmit}>보내기</button>
                </div>
            </footer>
        </div>
    );
};

export default SmsDataItem;
