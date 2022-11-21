import React, {useCallback, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/insertResult/resultModal.scss";
import {useDispatch} from "react-redux";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";

function AddResult(props) {
    const [result, setResult] = useState('');
    const [note, setNote] = useState('');
    const [sampleNote, setSampleNote] = useState('');

    const dispatch = useDispatch();


    const onChangeResult = useCallback(e => {
        setResult(e.target.value);
    }, [result]);

    const onChangeNote = useCallback(e => {
        setNote(e.target.value);
    }, [note]);

    const onChangeSampleNote = useCallback(e => {
        setSampleNote(e.target.value);
    }, [sampleNote]);

    const addResult = ((e) => {
        if (!result) {
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
            "figures": result,
            "note": note,
            "sampleNote": sampleNote
        }
        dispatch(InsertResultAction.insertConclusionResult(resultData));
    });

    const closeModal = (e) => {
        if(result == '' && note == '' && sampleNote == ''){
            props.closeModal();
            console.log("gd")
        }
        else{
            if (window.confirm("정보가 저장되지않습니다. 종료 하시겠습니까?") == true){
                props.closeModal();
            }else{
                e.preventDefault();
            }
        }
    }

    return (
        <form className="result_wrap">
            <div className="con_title">
                <ContentPasteSearchOutlinedIcon/>
                <h2>결과 등록</h2>
                <div className="con_barcode">
                    <h3>({props.barcode})</h3>
                </div>
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
                    <textarea className="note" value={sampleNote} onChange={onChangeSampleNote} placeholder="검체 비고 입력"/>
                </div>
            </div>

            <div className="footer">
                <button onClick={addResult}>등록</button>
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

export default AddResult;