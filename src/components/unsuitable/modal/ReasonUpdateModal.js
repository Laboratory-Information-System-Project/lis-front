import React, { useEffect, useState, useCallback} from "react";
import "../../../styles/unsuitable_reason_update.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";

function ReasonUpdate({
    setReasonUpdate,
    reasonUpdate,
    detail, 
    reason, 
    key2}) {

    const dispatch = useDispatch();
    
    // const [updateDetail, setUpdateDetail] = useState('');
    const [flag, setFlag] = useState(false);
    
    function closeModal() {
        setReasonUpdate(!reasonUpdate);
    }
    
    // 수정 x
    // const onUpdateDetail = useCallback((e) => {
    //     setUpdateDetail(e.target.value);
    // }, [updateDetail]);
    
    const { unsuitableSampleInfo } = useSelector((state)=> state.unsuitableSampleInfo);
    const [initSample, setInitSample] = useState([]);
    const [sampleDelete, setSampleDelete] = useState([]);
    
    
   const unsuitDeleteBtn = (e) => {
        e.preventDefault(); 
        // 해당 index 제외, 저장 ( 삭제 기능 )
        initSample.map((item, key) => {
            if(key != key2 && flag === false){
                setSampleDelete(initSample => [...initSample, item]);
            }
        })
        setFlag(true);
        if(flag){
            close();
        }
    };  
    
    useEffect(() => {
        unsuitableSampleInfo.data.map((item, key) => {
                 setInitSample(initSample => [...initSample, item]);
           })
    }, []);

    const close = () => {
        if(flag){
            dispatch(UnsuitableActions.getSample(sampleDelete));
            setFlag(false);
        }
        closeModal();
    }
    
    return (
        <div className="reason">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 사유</h2>
            </div>
            <div className="text">
                <p>{reason}</p>
            </div>
            <div className="content">
                <textarea placeholder="부적합 사유를 상세하게 작성해주세요." defaultValue={detail} readOnly>
                </textarea>
            </div>
            <div className="footer">
                <button className="btn" onClick={unsuitDeleteBtn}>삭제</button>
                <button className="btn" onClick={close}>닫기</button>
            </div>
        </div>
    )
}

export default ReasonUpdate;