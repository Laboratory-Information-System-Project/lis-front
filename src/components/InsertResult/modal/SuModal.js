import React, {useEffect, useState} from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import "../../../styles/insertResult/modalSecond.scss"

const CuModal = ({UnsuitableStatusInfo,pre,barcode,orderCode}) =>{

    const [text,setText]=useState('');
    const [b,setB] = useState([]);

    const onText = (value) => {
        setText(value);
    }

    useEffect(()=>{
        setB([]);
        {UnsuitableStatusInfo.data.map((data)=>{
            if(data.prescribeCode===pre && data.unsuitableStatusCode==='SU'){
                setB(b=>[...b, {code:data.unsuitableReasonCode, reason:data.unsuitableReasonName, text:data.unsuitableReasonText}])
            }
            return null;
        })}

    },[UnsuitableStatusInfo])

    return (
        <div className="unsuitable_modal_wrap">
            <div className="unsuitable_modal_title">
                <ArticleOutlinedIcon/>
                <p>체혈 부적합 사유 </p>
            </div>
            <div className="unsuitable_modal_story">
                <select className="select_size" onChange={value=>onText(value.target.value)}>
                    <option value="">부적합 사유를 선택해주세요</option>
                    {b.length>0 && b.map((data)=>{
                        console.log(data)
                        return (<option value={data.text}>{data.code} ({data.reason})</option>)
                    })}
                </select>
                <textarea className="story_text" value={text} readOnly />
            </div>
        </div>
    )
}

export default CuModal;
