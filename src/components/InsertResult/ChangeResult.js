import React,{useEffect} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/changeResult.scss";
import {useDispatch, useSelector} from "react-redux";
import ChangeResultAction from "../../redux/modules/InsertResult/ChangeResultAction";

function ChangeResult(props) {
    const {ChangeResultInfo} = useSelector((state) => state.ChangeResultInfo);
    const dispatch = useDispatch();

    ChangeResultInfo.data.map((data,index)=>{
        console.log(data.note);
    })

    function closeModal() {
        props.closeModal();
    }

    useEffect(() => {
        dispatch(ChangeResultAction.getResult(props.bnum));
    },[]);

    return (
        <div className="add">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>결과 수정</h2>
            </div>
            <div className="content">
                <p>검사 결과</p>
                <input type="text" placeholder="검사결과 입력"/>
                <p>비고</p>
                <textarea placeholder="비고"/>
                <p>검체 비고</p>
                <textarea placeholder="검체 비고"/>
            </div>
            <div className="btn_menu">
                <button className="add_btn">수정</button>
                <button className="close_btn" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default ChangeResult;