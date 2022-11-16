import React, {useCallback, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/insertResult/resultModal.scss";
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

    const addResult = useCallback(() => {
        let resultData = {
            "registerCode": props.bnum,
            "figures": result,
            "note": note,
            "sampleNote": sampleNote
        }
        dispatch(RealInsertAction.insertResult(resultData));
    });

    return (
        <form className="result_wrap">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon/>
                <h2>결과 등록</h2>
            </div>
            <div className="textarea_content">
                <p>검사 결과</p>
                <div className="input_textarea">
                    <textarea type="text" className="result" value={result} onChange={onChangeResult} placeholder="검사결과 입력"/>
                </div>
            </div>

            <div className="textarea_content">
                <p>비고</p>
                <div className="input_textarea">
                    <textarea className="note" value={note} onChange={onChangeNote} placeholder="비고 입력"/>
                </div>
            </div>

            <div className="textarea_content">
                <p>검체 비고</p>
                <div className="input_textarea">
                    <textarea className="note" value={sampleNote} onChange={onChangesampleNote} placeholder="검체 비고 입력"/>
                </div>
            </div>

            <div className="footer">
                <button onClick={addResult}>등록</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </form>
    )
}

export default AddResult;