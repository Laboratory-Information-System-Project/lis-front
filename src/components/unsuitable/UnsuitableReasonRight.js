import React, { useState } from "react";
import ReasonUpdateModal from "./modal/ReasonUpdateModal";
import Modal from "../unsuitable/modal/Modal";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const UnsuitableReasonRight = () => {
    const [reasonUpdate, setReasonUpdate] = useState(false);

    return (
        <div className="unsuitable-wrap right">
                        <div className="con-title">
                            <TextSnippetOutlinedIcon />
                            <p>부적합 사유</p>
                        </div>
                        <form>
                            <div className="selected-reason">
                                <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>부적합 사유 1 <DeleteForeverOutlinedIcon /></p> 
                                </div>
                                <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>부적합 사유 1 <DeleteForeverOutlinedIcon /></p> 
                                </div>
                                <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>부적합 사유 1 <DeleteForeverOutlinedIcon /></p> 
                                </div>
                            </div>
                                <button className="btn">등록</button>
                        </form>
                            {reasonUpdate && (
                                    <Modal closeModal={() => setReasonUpdate(!reasonUpdate)}>
                                        <ReasonUpdateModal closeModal={() => setReasonUpdate(!reasonUpdate)} />
                                    </Modal>)}
                    </div>
    )
}

export default UnsuitableReasonRight;