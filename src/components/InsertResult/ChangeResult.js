import React, {useCallback, useEffect, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/insertResult/resultModal.scss";
import {useDispatch, useSelector} from "react-redux";
import ChangeResultAction from "../../redux/modules/InsertResult/ChangeResultAction";
import RealInsertAction from "../../redux/modules/InsertResult/RealInsertAction";

function ChangeResult(props) {

    const dispatch = useDispatch();

    const [figures,setFigures] = useState('');
    const [note,setNote] = useState('');
    const [sampleNote,setSampleNote] = useState('');

    const short = props.ChangeResultInfo.data[props.bnum-1];

    useEffect(() => {
        props.ChangeResultInfo.data.map((data, index) => {
            if (data.registerCode == props.bnum) {
                setFigures(data.figures);
                setNote(data.note);
                setSampleNote(data.sampleNote);
            }
        })
    },[]);

    function closeModal() {
        props.closeModal();
    }

    const onChangeFigures = useCallback(e => {
        setFigures(() => e.target.value);
    }, [figures]);

    const onChangeNote = useCallback(e => {
        setNote(() => e.target.value);
    }, [note]);

    const onChangeSampleNote = useCallback(e => {
        setSampleNote(() => e.target.value);
    }, [sampleNote]);

    const updateResult = useCallback((e) => {
        let resultData = {
            "registerCode": props.bnum,
            "figures": figures,
            "note": note,
            "sampleNote": sampleNote
        }
        dispatch(RealInsertAction.updateResult(resultData));
    });


    return (
        <form className="result_wrap">

            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>결과 수정</h2>
            </div>

            <div className="textarea_content">
                <p>검사 결과</p>
                <div className="input_textarea">
                <textarea className="result" value={figures} onChange={onChangeFigures} placeholder="검사결과 입력"/>
                </div>
            </div>

            <div className="textarea_content">
                <p>비고</p>
                <div className="input_textarea">
                <textarea className="note" value={note} onChange={onChangeNote} placeholder="비고"/>
                </div>
            </div>

            <div className="textarea_content">
                <p>검체 비고</p>
                <div className="input_textarea">
                    <textarea className="note" value={sampleNote} onChange={onChangeSampleNote} placeholder="검체 비고"/>
                </div>
            </div>

            <div className="footer">
                <button onClick={updateResult}>수정</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </form>
    )
}

export default ChangeResult;