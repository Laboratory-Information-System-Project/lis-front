import React, { useState } from "react";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import UnsuitableReasonList from "./UnsuitableReasonList";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";

const UnsuitableReasonRight = ( {unsuitableSampleInfo} ) => {
    
    const dispatch = useDispatch();

    const registryUnsuitableSampleBtn = (e) => {
        unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((data, key) => {
            if(key > 0) {
                let unsuitInfo ={
                    "barcode": data.sampleBarcode,
                    "category": data.selectedCategory,
                    "reason": data.selectedReason,
                    "detail": data.query,
                    "notificatorId": data.employeeAuthority,
                    "notifiedUserId": data.employeeId
                }
                dispatch(UnsuitableActions.postUnsuitInfo(unsuitInfo));      
            }
        })
        alert('부적합 검체가 등록되었습니다.');
    }

    return (
        <div className="unsuitable-wrap right">
                        <div className="con-title">
                            <TextSnippetOutlinedIcon />
                            <p>부적합 사유</p>
                        </div>
                        <form>
                            <div className="selected-reason">
                                <UnsuitableReasonList unsuitableSampleInfo={unsuitableSampleInfo}/>
                            </div>
                                <button className="btn" onClick={registryUnsuitableSampleBtn}>등록</button>
                        </form>
                           
                    </div>
    )
}

export default UnsuitableReasonRight;