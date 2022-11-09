import React from "react";
import "../../../styles/unsuitable_reason_update.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

function ReasonUpdate(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="reason">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 사유</h2>
            </div>
            <div className="text">
                <p>부적합 사유 1</p>
            </div>
            <div className="content">
                <textarea placeholder="부적합 사유를 상세하게 작성해주세요.">

                </textarea>
            </div>
            <div className="footer">
                <button className="btn">수정</button>
                <button className="btn" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default ReasonUpdate;