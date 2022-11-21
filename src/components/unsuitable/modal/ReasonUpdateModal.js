import React, { useCallback, useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import "../../../styles/unsuitable_reason_update.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function ReasonUpdate({
    setReasonUpdate,
    reasonUpdate,
    employeeAuthority,
    employeeId,
    detail,
    selectedReason,
    selectedCategory, 
    sampleBarcode,
    key2}) {
    
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);
    const [sampleDelete, setSampleDelete] = useState([]);
    const [updateDetail, setUpdateDetail] = useState([]);
    const [query, setQuery] = useState(detail);

    const { unsuitableSampleInfo } = useSelector((state)=> state.unsuitableSampleInfo);
    const dispatch = useDispatch();
    
    function closeModal() {
        setReasonUpdate(!reasonUpdate);
    }

    const onChangeDetail = useCallback((e) => {
        setQuery(e.target.value);
    }, [query])

    const unsuitModifyBtn = (e) => {
        e.preventDefault();
        if(query == detail){
            toast.error("수정사항을 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        } else {
            if (window.confirm("수정하시겠습니까?")) {
                unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((item, key) => {
                    if(key != key2 && flag === false) {
                        setUpdateDetail(updateDetail => [...updateDetail, item]);
                    }
                })
                setFlag2(true);
            }
        }
    }

    useEffect(() => {
        if(flag2){
            setUpdateDetail(updateDetail => [...updateDetail, {sampleBarcode, employeeId, employeeAuthority, query, selectedCategory, selectedReason}])
            setFlag2(false);
            setFlag3(true);
        }
        
        
    }, [flag2])

    useEffect(() => {
        if(flag3){
            dispatch(UnsuitableActions.getSample(updateDetail));
            setFlag3(false);
            closeModal();
        }
    }, [flag3])

    
    const unsuitDeleteBtn = (e) => {
        e.preventDefault(); 
        // 해당 index 제외, 저장 ( 삭제 기능 )
        if (window.confirm("정말 삭제하시겠습니까?")) {
            unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((item, key) => {
                if(key != key2 && flag === false){
                    setSampleDelete(sampleDelete => [...sampleDelete, item]);
                }
            })
            setFlag(true);
        } 
    };  
    
    useEffect(()=> {
        if(flag){
            close();
        }
    }, [flag])

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
                <div className="header">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 사유</h2> 
                </div>
                <button  className="close-btn" onClick={close}><CloseOutlinedIcon /></button>

            </div>
            <div className="text">
                <p>{selectedReason}</p>
            </div>
            <div className="content">
                <textarea placeholder="비고" value={query} onChange={onChangeDetail}>{query}
                </textarea>
            </div>
            <div className="footer">
                <button className="btn2" onClick={unsuitModifyBtn}>수정</button>
                <button className="btn2" onClick={unsuitDeleteBtn}>삭제</button>
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
        </div>
    )
}

export default ReasonUpdate;