import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import UnsuitableActions from "../redux/modules/Unsuitable/UnsuitableActions";
import SearchBar from "../components/unsuitable/searchbar/SearchBar";
import SampleList from "../components/unsuitable/sample/SampleList";
import PrescribeList from "../components/unsuitable/perscribe/PrescribeList";
import UnsuitableReasonLeft from "../components/unsuitable/reasonleft/UnsuitableReasonLeft";
import UnsuitableReasonRight from "../components/unsuitable/reasonright/UnsuitableReasonRight";
import { DoNotDisturbAltOutlined } from "@mui/icons-material";
import '../styles/unsuitable.scss';


const Unsuitable = () => {
    const { sampleInfo } = useSelector((state) => state.sampleInfo);
    const { prescribeInfo } = useSelector((state) => state.prescribeInfo);
    const { unsuitableSampleInfo } = useSelector((state) => state.unsuitableSampleInfo);
    const { unsuitableReasonInfo } = useSelector((state) => state.unsuitableReasonInfo);

    const dispatch = useDispatch();

    const onSubmit = (query) => {
        dispatch(UnsuitableActions.getSamples(query));
        dispatch(UnsuitableActions.getPrescribes(query));
    }

    useEffect(() => {
        dispatch(UnsuitableActions.getUnsuitableReason());
    }, []);

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <DoNotDisturbAltOutlined />
                    <h2>부적합 검체등록 <span>Unsuitable sample registration</span></h2>
                </div>
                <SearchBar onSubmit={onSubmit} />
                <div className="content1">
                    {/* 검체 정보 */}
                    <div className="sample-wrap">
                        <div className="con-title">
                            <BloodtypeOutlinedIcon />
                            <p>검체정보</p>
                        </div>
                        <SampleList sampleInfo={sampleInfo}/>
                    </div>
                    {/* 처방 정보 */}
                    <div className="perscribe-wrap">
                        <div className="con-title">
                            <LocalHospitalOutlinedIcon />
                            <p>처방정보</p>
                        </div>
                        <PrescribeList prescribeInfo={prescribeInfo} />
                    </div>
                </div>
                <div className="content2">
                    {/* 부적합 사유 1 */}
                    <UnsuitableReasonLeft sampleInfo={sampleInfo} unsuitableReasonInfo={unsuitableReasonInfo} />
                 
                    {/* 부적합 사유 2 */}
                    <UnsuitableReasonRight unsuitableSampleInfo={unsuitableSampleInfo}/>
                </div>
            </div>
        </div>
        
    )
}

export default Unsuitable;