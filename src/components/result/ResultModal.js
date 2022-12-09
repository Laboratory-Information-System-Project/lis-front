import React from 'react';
import styled from '@emotion/styled';
import '../../styles/resultCheck/modal.scss';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined';
import SmsDataList from './SmsDataList';
import SmsSelectText from './SmsSelectText';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const ResultModal = ({ open, close, selectSmsData, setSelectSmsData }) => {
    const selectSmsDataHandler = (e) => {
        setSelectSmsData(e.target.value);
    };

    return (
        <>
            <div
                className={open ? 'openModal modal modal-background' : 'modal'}
                onClick={close}
            />
            <div className={open ? 'openModal modal modalWrap' : 'modal'}>
                {open ? (
                    <>
                        <header className='modal-wrap-header backgroundColor'>
                            <div className='header-flex'>
                                <ForwardToInboxSharpIcon />
                                <h2>SMS Message</h2>
                            </div>
                            <div className='modal-close'>
                                <LogoutOutlinedIcon onClick={close} />
                            </div>
                        </header>

                        <div className='modal-flex-wrap'>
                            <div className='phone_background'>
                                <div className='phone_wrap'>
                                    <div className='modal-in-wrap phone'>
                                        <header className='modal-in-header'>
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
                                            selectSmsDataHandler={
                                                selectSmsDataHandler
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='modal-in-wrap'>
                                <header className='modal-wrap-header sms-select'>
                                    <SpeakerNotesOutlinedIcon />
                                    <ModalTitle>문자 내용 리스트</ModalTitle>
                                </header>
                                <SmsSelectText
                                    selectSmsData={selectSmsData}
                                    setSelectSmsData={setSelectSmsData}
                                    selectSmsDataHandler={selectSmsDataHandler}
                                />
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};
const ModalTitle = styled.h2`
    font-size: 16px;
`;

export default ResultModal;
