import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import '../../styles/resultCheck/modal.scss';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined';
import SmsDataList from './SmsDataList';
import SmsSelectText from './SmsSelectText';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ResultModal = ({ open, close, selectSmsData, setSelectSmsData }) => {
    const selectSmsDataHandler = (e) => {
        setSelectSmsData(e.target.value);
    };

    console.log(selectSmsData + 'ㅎㅇ');

    return (
        <>
            <div
                className={open ? 'openModal modal modal-background' : 'modal'}
                onClick={close}
            />
            <div className='modal-wrap'>
                <div className={open ? 'openModal modal phone' : 'modal'}>
                    {open ? (
                        <div className='modal-in-wrap phone'>
                            <header>
                                <div className='camera-wrap'>
                                    <ul>
                                        <li className='sound'></li>
                                        <li className='camera'></li>
                                    </ul>
                                </div>
                                <ul className='top-icon'>
                                    <li>
                                        <SignalCellularAltOutlinedIcon />
                                    </li>
                                    <li>
                                        <WifiOutlinedIcon />
                                    </li>
                                    <li>
                                        <BatteryFullOutlinedIcon />
                                    </li>
                                </ul>
                            </header>
                            <SmsDataList
                                close={close}
                                selectSmsData={selectSmsData}
                                setSelectSmsData={setSelectSmsData}
                                selectSmsDataHandler={selectSmsDataHandler}
                            />
                        </div>
                    ) : null}
                </div>

                <div className={open ? 'openModal modal' : 'modal'}>
                    {open ? (
                        <div className='modal-in-wrap'>
                            <header>
                                <EmailOutlinedIcon />
                                <ModalTitle>문자 내용 리스트</ModalTitle>
                            </header>
                            <SmsSelectText
                                selectSmsData={selectSmsData}
                                setSelectSmsData={setSelectSmsData}
                                selectSmsDataHandler={selectSmsDataHandler}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

const ModalTitle = styled.h2`
    font-size: 16px;
`;

export default ResultModal;
