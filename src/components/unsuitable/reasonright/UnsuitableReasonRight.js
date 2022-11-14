import React, { useState } from "react";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import UnsuitableReasonList from "./UnsuitableReasonList";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";

const UnsuitableReasonRight = ( {unsuitableSampleInfo} ) => {
    
    const dispatch = useDispatch();

    const registryUnsuitableSampleBtn = (e) => {
        e.preventDefault();
        
        unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((data, key) => {
            if(Object.keys(data).length != 0){
               console.log(unsuitableSampleInfo.data);
            }
        })
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