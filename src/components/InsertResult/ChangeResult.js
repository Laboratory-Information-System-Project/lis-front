import React, {useCallback, useEffect, useState} from "react";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import "../../styles/changeResult.scss";
import {useDispatch, useSelector} from "react-redux";
import ChangeResultAction from "../../redux/modules/InsertResult/ChangeResultAction";
import RealInsertAction from "../../redux/modules/InsertResult/RealInsertAction";

function ChangeResult(props) {

    const {ChangeResultInfo} = useSelector((state) => state.ChangeResultInfo);
    const dispatch = useDispatch();

    const [figures,setFigures] = useState('');
    const [note,setNote] = useState('');
    const [sampleNote,setSampleNote] = useState('');

    useEffect(() => {
        dispatch(ChangeResultAction.getResultList());
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

    const updateResult = useCallback(()=>{
        let resultData={
            "registerCode": props.bnum,
            "figures": document.getElementById("result").innerHTML,
            "note": document.getElementById("note").innerHTML,
            "sampleNote": document.getElementById("sampleNote").innerHTML
        }

        dispatch(RealInsertAction.updateResult(resultData));
        props.closeModal()
    });


    return (
        <div className="add">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>결과 수정</h2>
            </div>
            <div className="content">

                <p>검사 결과</p>
                <input value={ChangeResultInfo?.data?.length>0 && ChangeResultInfo.data[props.bnum-1].figures} onChange={onChangeFigures} placeholder="검사결과 입력"/>
                <p>검사 결과</p>
                <textarea id="result" defaultValue={ChangeResultInfo?.data?.length>0 && ChangeResultInfo.data[props.bnum-1].figures} onChange={onChangeFigures} placeholder="검사결과 입력"/>
                <p>비고</p>
                {ChangeResultInfo?.data?.length>0 && ChangeResultInfo.data[props.bnum-1].note ?
                <textarea defaultValue={ChangeResultInfo?.data?.length>0 && ChangeResultInfo.data[props.bnum-1].note} onChange={onChangeNote} placeholder="비고"/> :
                    <textarea defaultValue={''} onChange={onChangeNote} placeholder="비고"/>
                }
                <p>검체 비고</p>
                {ChangeResultInfo?.data?.length>0 && ChangeResultInfo.data[props.bnum-1].sampleNote?
                <textarea id="sampleNote" defaultValue={ChangeResultInfo?.data?.length>0 && ChangeResultInfo.data[props.bnum-1].sampleNote} onChange={onChangeSampleNote} placeholder="검체 비고"/> :
                    <textarea id="sampleNote" defaultValue={''} onChange={onChangeSampleNote} placeholder="검체 비고"/>
                }
            </div>
            <div className="btn_menu">
                <button className="change_btn" onClick={updateResult}>수정</button>
                <button className="close_btn" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default ChangeResult;