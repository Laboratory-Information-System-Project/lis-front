import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import UnsuitableActions from "../redux/modules/Unsuitable/UnsuitableActions";
import SearchBar from "../components/unsuitable/SearchBar";
import SampleList from "../components/unsuitable/sample/SampleList";
import PrescribeList from "../components/unsuitable/perscribe/PrescribeList";
import UnsuitableReasonLeft from "../components/unsuitable/reasonleft/UnsuitableReasonLeft";
import UnsuitableReasonRight from "../components/unsuitable/UnsuitableReasonRight";
import '../styles/unsuitable.scss';



const Unsuitable = () => {
    
    // 스토어에 있는 애들 꺼내오는 애 * 중괄호 꼭 쓰기
    const { unsuitableInfo } = useSelector((state) => state.unsuitableInfo);
    const { prescribeInfo } = useSelector((state) => state.prescribeInfo);
    
    // 리듀서 뺴오는 애
    const dispatch = useDispatch();

    const onSubmit = async (query, target) => {
        dispatch(UnsuitableActions.getSamples(query, target));
        dispatch(UnsuitableActions.getPrescribes(query, target));
    }

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
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
                        <SampleList unsuitableInfo={unsuitableInfo}/>
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
                    <UnsuitableReasonLeft />
                 
                    {/* 부적합 사유 2 */}
                    <UnsuitableReasonRight />
                </div>
            </div>
        </div>
        
    )
}

export default Unsuitable;