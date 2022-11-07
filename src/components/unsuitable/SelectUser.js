import React from "react";
import "../../styles/user.scss"
import "../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import Modal from "./Modal";

function SelectUser(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="user">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>피통보자 검색</h2>
            </div>
            <div className="text">
                <p>찾으시려는 피통보자를 검색해주세요.</p>
            </div>
            <div className="input-name">
                <input type="text" 
                       placeholder="이름을 입력해주세요."
                />
                <button id="btn">검색</button>
            </div>
            <div className="content">

            </div>
            <div className="footer">
                <button className="btn2">완료</button>
                <button className="btn2" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default SelectUser;