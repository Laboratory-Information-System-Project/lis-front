import React from "react";

import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import UnsuitableReasonList from "./UnsuitableReasonList";
import { Co2Sharp } from "@mui/icons-material";

const UnsuitableReasonRight = ( {unsuitableSampleInfo} ) => {
    
    const test = (e) => {
        console.log("this is out")
        console.log(unsuitableSampleInfo.data);
        e.preventDefault();
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
                                <button className="btn" onClick={test}>등록</button>
                        </form>
                           
                    </div>
    )
}

export default UnsuitableReasonRight;