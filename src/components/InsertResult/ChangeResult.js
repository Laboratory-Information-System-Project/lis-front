import React, {useCallback, useEffect, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/insertResult/resultModal.scss";
import {useDispatch} from "react-redux";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";

function ChangeResult(props) {

    const dispatch = useDispatch();

    const [figures,setFigures] = useState('');
    const [note,setNote] = useState('');
    const [sampleNote,setSampleNote] = useState('');

    const [firstFigures,setFirstFigures] = useState('');
    const [firstNote,setFirstNote] = useState('');
    const [firstSampleNote,setFirstSampleNote] = useState('');

    useEffect(() => {
        props.ConclusionInfo.data.map((data) => {
            if (data.registerCode == props.registerCode) {
                setFigures(data.figures);
                setNote(data.note);
                setSampleNote(data.sampleNote);

                setFirstFigures(data.figures);
                setFirstNote(data.note);
                setFirstSampleNote(data.sampleNote);
            }
        })
    },[]);


    const onChangeFigures = useCallback(e => {
        setFigures(() => e.target.value);
    }, [figures]);

    const onChangeNote = useCallback(e => {
        setNote(() => e.target.value);
    }, [note]);

    const onChangeSampleNote = useCallback(e => {
        setSampleNote(() => e.target.value);
    }, [sampleNote]);

    const updateResult = ((e) => {
        if (!figures) {
            e.preventDefault();
            toast.error("검사결과를 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }
        let resultData = {
            "registerCode": props.registerCode,
            "figures": figures,
            "note": note,
            "sampleNote": sampleNote
        }
        dispatch(InsertResultAction.updateConclusion(resultData));
    });

    function closeModal(e) {
        if(figures == firstFigures && note == firstNote && sampleNote == firstSampleNote){
            props.closeModal();
        }
        else{
            if (window.confirm("정보가 수정되지않았습니다. 종료 하시겠습니까?") == true){
                props.closeModal();
            }else{
                e.preventDefault();
            }
        }
    }

    return (
        <form className="result_wrap">

            <div className="con_title">
                <ContentPasteSearchOutlinedIcon />
                <h2>결과 수정</h2>
                <h3>({props.barcode})</h3>
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

            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </form>
    )
}

export default ChangeResult;