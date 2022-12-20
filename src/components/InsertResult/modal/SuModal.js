import React, {useEffect, useState} from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import "../../../styles/insertResult/modalSecond.scss"

const SuModal = ({UnsuitableStatusInfo,pre}) =>{

    const [text,setText]=useState('');
    const [b,setB] = useState([]);

    const onText = (value) => {
        setText(value);
    }

    useEffect(()=>{
        setB([]);
        {UnsuitableStatusInfo.data.map((data,index)=>{
            if(data.prescribeCode===pre && data.unsuitableStatusCode==='SU'){
                setB(b=>[...b, {code:data.unsuitableReasonCode, reason:data.unsuitableReasonName, text:data.unsuitableReasonText}])
            }
            return null;
        })}
    },[UnsuitableStatusInfo,pre]);

    return (
        <div className="modal_wrap">
            <div className="modal_title">
                <ArticleOutlinedIcon/>
                <p>체혈 부적합 사유 </p>
            </div>
            <div className="unsuitable_modal_story">
                <select onChange={value=>onText(value.target.value)} >
                    {b.length>0 && b.map((data)=>{
                        return (<option value={data.text}>{data.code} ({data.reason})</option>)
                    })}
                </select>
                <div className="unsuitable_text">{text===""?"기록된 메모가 없습니다":text}</div>
            </div>
        </div>
    )
}

export default SuModal;