import React, {useCallback, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/changeResult.scss"
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import {useDispatch} from "react-redux";

function ChangeResult(props) {

    function closeModal() {
        props.closeModal();
    }

    const[value,setValue]=useState(props.bcontent);
    const onChange= useCallback(e=>{
        setValue(e.target.value);
    },[]);

    return (
        <div className="add">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>결과 수정</h2>
            </div>
            <div className="content">
                <p>결과</p>
                <input type="text" value={value} onChange={onChange}/>
            </div>
            <div className="btn_menu">
                <button className="add_btn">수정</button>
                <button className="close_btn" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default ChangeResult;