import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import ResultActions from '../../redux/modules/Result/ResultActions';
import Swal from 'sweetalert2';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';

const SmsSelectText = ({ selectSmsData, selectSmsDataHandler }) => {
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
        <Container>
            <SmsDataFlex>
                <ContainerInWrap>
                    <SmsDataWrap>
                        <SmsData
                            type='radio'
                            name='SmsData'
                            value={`더존병원입니다. ${resultInfo.data[0].patientName}님의 수치결과 확인을 위해 병원에 방문 부탁드리겠습니다.`}
                            onChange={selectSmsDataHandler}
                        />
                        <SmsDataTitle>결과 확인</SmsDataTitle>
                    </SmsDataWrap>

                    <TextWrap>
                        <SmsContent>{`더존 병원입니다. ${resultInfo.data[0].patientName}님의 수치결과 확인을 위해 병원에 방문 부탁드리겠습니다.  `}</SmsContent>
                    </TextWrap>
                </ContainerInWrap>
                <ContainerInWrap>
                    <SmsDataWrap>
                        <SmsData
                            type='radio'
                            name='SmsData'
                            value={`안녕하세요 ~ ${resultInfo.data[0].patientName}님 123.`}
                            onChange={selectSmsDataHandler}
                        />
                        <SmsDataTitle>재검사 필요</SmsDataTitle>
                    </SmsDataWrap>
                    <TextWrap>
                        <SmsContent>{`더존 병원입니다. ${resultInfo.data[0].patientName}님의 수치결과 확인을 위해 병원에 방문 부탁드리겠습니다.  `}</SmsContent>
                    </TextWrap>
                </ContainerInWrap>
            </SmsDataFlex>

            <SmsDataFlex>
                <ContainerInWrap>
                    <SmsDataWrap>
                        <SmsData
                            type='radio'
                            name='SmsData'
                            value={`안녕하세요 ~ ${resultInfo.data[0].patientName}님 12345.`}
                            onChange={selectSmsDataHandler}
                        />
                        <SmsDataTitle>음성 결과</SmsDataTitle>
                    </SmsDataWrap>
                    <TextWrap>
                        <SmsContent>{`더존 병원입니다. ${resultInfo.data[0].patientName}님의 수치결과 확인을 위해 병원에 방문 부탁드리겠습니다.  `}</SmsContent>
                    </TextWrap>
                </ContainerInWrap>
                <ContainerInWrap>
                    <SmsDataWrap>
                        <SmsData
                            type='radio'
                            name='SmsData'
                            value={`안녕하세요 ~ ${resultInfo.data[0].patientName}님 123456778.`}
                            onChange={selectSmsDataHandler}
                        />
                        <SmsDataTitle>양성 결과</SmsDataTitle>
                    </SmsDataWrap>
                    <TextWrap>
                        <SmsContent>{`더존 병원입니다. ${resultInfo.data[0].patientName}님의 수치결과 확인을 위해 병원에 방문 부탁드리겠습니다.  `}</SmsContent>
                    </TextWrap>
                </ContainerInWrap>
            </SmsDataFlex>

            <SubmitBtnContanier>
                <SubmitBtn onClick={onSubmit}>
                    메시지 발송하기 <SendToMobileOutlinedIcon />
                </SubmitBtn>
            </SubmitBtnContanier>
        </Container>
    );
};

export default SmsSelectText;

const Container = styled.div``;
const ContainerInWrap = styled.div`
    border: 1px solid #e9e9e9;
    width: 49%;
    margin-bottom: 0.5em;
`;
const TextWrap = styled.div``;
const SmsContent = styled.p`
    font-size: 0.0001em;
    padding: 10px 5px 10px 5px;
    height: 110px;
    background: #f4fafa;
`;
const SmsDataTitle = styled.h3`
    font-size: 12px;
    font-weight: normal;
`;
const SmsData = styled.input`
    cursor: pointer;
`;

const SmsDataWrap = styled.div`
    background: #fff;
    padding: 4px 5px 4px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
`;

const SmsDataFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SubmitBtnContanier = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    border-top: 1px solid #f0f0f0;
    margin-top: 57px;
`;

const SubmitBtn = styled.button`
    width: 100%;
    padding: 12px 41px;
    margin-top: 15px;
    background: #4186c9;
    border: none;
    color: #f0f0f0;
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #5b9ee2;
    }

    &:active {
        background: #165390;
    }

    svg {
        font-size: 18px;
        margin-left: 3px;
    }
`;
