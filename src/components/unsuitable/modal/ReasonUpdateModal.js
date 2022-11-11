import React, { useEffect, useState, useCallback} from "react";
import "../../../styles/unsuitable_reason_update.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import { unsuitableInfo, unsuitableSampleInfo } from "../../../redux/modules";

function ReasonUpdate({
    setReasonUpdate,
    reasonUpdate,
    sampleBarcode,
    category,
    employeeAuthority,
    detail, 
    reason, 
    key2}) {

    const dispatch = useDispatch();
    
    const [updateDetail, setUpdateDetail] = useState('');
    
    function closeModal() {
        setReasonUpdate(!reasonUpdate);
    }
    
    const onUpdateDetail = useCallback((e) => {
        setUpdateDetail(e.target.value);
    }, [updateDetail]);
    
    // test
//     const { unsuitableSampleInfo } = useSelector((state) => state.unsuitableSampleInfo);

//     const [initSample, setInitSample] = useState([]);

//     // 해당인덱스 제외하고 저장?
    
//     const submitUpdate = (e) => {
//         e.preventDefault(); 
        
//         unsuitableSampleInfo.data.map((item, key) => {
//             console.log(initSample);

//             if(key != key2){
//                 setInitSample(initSample => [...initSample, item]);
//             }
//         }
//         )
//         let sampleDetail = '';    
//         dispatch(UnsuitableActions.getSample(sampleDetail));

//         sampleDetail = [...initSample, {updateDetail, sampleBarcode,
//             category,
//             employeeAuthority,
//             detail, 
//             reason}]
        
//             dispatch(UnsuitableActions.getSample(sampleDetail)); 

// };

//     useEffect(()=> {
//         const sampleDetail = '';    
//         dispatch(UnsuitableActions.getSample(sampleDetail));
//     }, [initSample]);

    

    const see = (e) => {
        
        e.preventDefault();
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
                <textarea placeholder="부적합 사유를 상세하게 작성해주세요." defaultValue={detail} onChange={onUpdateDetail}>
                </textarea>
            </div>
            <div className="footer">
                <button className="btn" onClick={closeModal}>수정</button>
                {/* <button className="btn" onClick={see}>보기</button> */}
                <button className="btn" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default ReasonUpdate;