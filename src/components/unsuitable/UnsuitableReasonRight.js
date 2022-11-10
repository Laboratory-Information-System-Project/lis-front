import React, { useEffect, useState } from "react";
import ReasonUpdateModal from "./modal/ReasonUpdateModal";
import Modal from "../unsuitable/modal/Modal";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import UnsuitableReasonList from "./UnsuitableReasonList";

const UnsuitableReasonRight = ( {unsuitableSampleInfo} ) => {
    const [reasonUpdate, setReasonUpdate] = useState(false);
    

    const test = (e) => {
        e.preventDefault();
    }

    // console.log(unsuitableSampleInfo.data);

    const unsuitableData = unsuitableSampleInfo.data;
    console.log(unsuitableData);
    console.log('dddd');

    return (
        <div className="unsuitable-wrap right">
                        <div className="con-title">
                            <TextSnippetOutlinedIcon />
                            <p>부적합 사유</p>
                        </div>
                        <form>
                            <div className="selected-reason">
                                {/* <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>{unsuitableSampleInfo.data.selectedReason}<DeleteForeverOutlinedIcon /></p> 
                                </div> */}
                                <UnsuitableReasonList unsuitableData={unsuitableData}/>
                            </div>
                                <button className="btn" onClick={test}>등록</button>
                        </form>
                            {reasonUpdate && (
                                    <Modal closeModal={() => setReasonUpdate(!reasonUpdate)}>
                                        <ReasonUpdateModal closeModal={() => setReasonUpdate(!reasonUpdate)} />
                                    </Modal>)}
                    </div>
    )
}

export default UnsuitableReasonRight;