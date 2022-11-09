import React from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/addResult.scss"

function AddResult(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="add">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>결과 등록</h2>
            </div>
            <div className="content">
                <p>결과</p>
                <input type="text" placeholder="추가 결과1"/>
            </div>
            <div className="btn_menu">
                <button className="add_btn">등록</button>
                <button className="close_btn" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default AddResult;