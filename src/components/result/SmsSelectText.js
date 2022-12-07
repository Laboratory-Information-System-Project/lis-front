import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const SmsSelectText = ({ selectSmsData, selectSmsDataHandler }) => {
    const { resultInfo } = useSelector((state) => state.ResultInfo);

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
        </Container>
    );
};

export default SmsSelectText;

const Container = styled.div`
    padding-top: 0.3em;
`;
const ContainerInWrap = styled.div`
    border: 1px solid #e9e9e9;
    width: 49%;
    margin-top: 0.3em;
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
