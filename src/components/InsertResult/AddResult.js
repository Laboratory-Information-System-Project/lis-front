import React, {useCallback, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/addResult.scss"
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import RealInsertAction from "../../redux/modules/InsertResult/RealInsertAction";
import {useDispatch} from "react-redux";

function AddResult(props) {
    const [result, setResult] = useState('');
    const [note, setNote] = useState('');
    const [sampleNote, setSampleNote] = useState('');

    const dispatch = useDispatch();

    function closeModal() {
        props.closeModal();
    }

    const onChangeResult = useCallback(e => {
        setResult(e.target.value);
    }, [result]);

    const onChangeNote = useCallback(e => {
        setNote(e.target.value);
    }, [note]);

    const onChangesampleNote = useCallback(e => {
        setSampleNote(e.target.value);
    }, [sampleNote]);

    const addResult = useCallback(()=>{
        let resultData={
            "registerCode": props.bnum,
            "figures": result,
            "note":note,
            "sampleNote":sampleNote
        }
        dispatch(RealInsertAction.insertResult(resultData));
    });

    return (
        <form>
            <div className="modal_title">
                <ContentPasteSearchOutlinedIcon/>
                <h2>결과 등록</h2>
            </div>
            <p>검사 결과</p>
            <input type="text" value={result} onChange={onChangeResult} placeholder="검사결과 입력"/>
            <p>비고</p>
            <textarea value={note} onChange={onChangeNote} placeholder="비고"/>
            <p>검체 비고</p>
            <textarea value={sampleNote} onChange={onChangesampleNote} placeholder="검체 비고"/>
            <div className="btn_menu">
                <button className="add_btn" onClick={addResult}>등록</button>
                <button className="close_btn" onClick={closeModal}>닫기</button>
            </div>
        </form>
    )
}

export default AddResult;