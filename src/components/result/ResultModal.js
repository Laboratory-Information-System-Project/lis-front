import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/resultCheck/modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import ResultActions from '../../redux/modules/Result/ResultActions';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined';
import SmsDataList from './SmsDataList';

const ResultModal = ({ open, close, data }) => {
    return (
        <>
            <div
                className={open ? 'openModal modal modal-background' : 'modal'}
                onClick={close}
            />
            <div className="modal-wrap">
                <div className={open ? 'openModal modal phone' : 'modal'}>
                    {open ? (
                        <div className="modal-in-wrap phone">
                            <header>
                                <div className="camera-wrap">
                                    <ul>
                                        <li className="sound"></li>
                                        <li className="camera"></li>
                                    </ul>
                                </div>
                                <ul className="top-icon">
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
                            <SmsDataList data={data} close={close} />
                        </div>
                    ) : null}
                </div>

                {/* <div className={open ? 'openModal modal' : 'modal'}>
                    {open ? (
                        <div className="modal-in-wrap">
                            <header>
                                <MailOutlineOutlinedIcon />
                                결과발송
                            </header>
                            <span>부적합 사유이름</span>
                            <div className="in-content"></div>
                            <footer></footer>
                        </div>
                    ) : null}
                </div> */}
            </div>
        </>
    );
};

export default ResultModal;
