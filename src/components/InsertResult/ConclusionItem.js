import React, {useEffect, useState} from 'react';

import "../../styles/insertResult/insertResult.scss";
import {toast} from "react-toastify";

const ConclusionItem = ({ConclusionInfo, inspectionCode, unit, registerCode, conclusionDataList, setConclusionDataList, barcode}) => {

    const [figures,setFigures]=useState('');
    const [note,setNote]=useState('');
    const [resultNo,setResultNo]=useState('');

    const [conclusionData,setConclusionData]=useState({});

    const [dataFlag,setDataFlag] = useState(false);
    const [listFlag,setListFlag] = useState(false);

    const onChangeFigures = (e) => {

        const newValue = e.target.value.replace(/[^0-9]/g, '')

        if (e.target.value >= 0) {
            if (newValue.length > 15) {
                if (newValue > 999999999999999) {
                    setFigures(999999999999999);
                    toast.error("지정된 범위 밖의 문자입니다.\n(15자리 이하의 숫자만 입력해주세요)", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    })
                    return
                }
            }
        } else {
            toast.error("숫자만 입력해주세요", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
            return
        }

        setFigures(() => newValue);

        conclusionDataList.map(data=>{
            if(data.inspectionCode === inspectionCode){
                data.figures=newValue;
            }
            return null;
        })
    }

    const onChangeNote = (e) => {
        setNote(() => e.target.value);

        conclusionDataList.map(data=>{
            if(data.inspectionCode === inspectionCode){
                data.note=e.target.value;
            }
            return null;
        })
    };


    useEffect(()=>{
        if(listFlag){
            if(conclusionDataList.find(item => item.inspectionCode===inspectionCode)){
                return
            }
            setConclusionDataList(conclusionDataList => [...conclusionDataList, conclusionData]);
        }
    },[listFlag,conclusionData,conclusionDataList,inspectionCode,setConclusionDataList])

    useEffect(()=>{
        if(dataFlag) {
            setConclusionData({resultNo, inspectionCode, registerCode, figures, note,barcode});
            setListFlag(true);
        }
    },[dataFlag,figures,inspectionCode,note,registerCode,resultNo,barcode])

    useEffect(()=>{
        ConclusionInfo?.data?.length > 0 && ConclusionInfo.data.map(data => {
            if(data.inspectionCode === inspectionCode){
                setFigures(data.figures);
                setNote(data.note);
                setResultNo(data.resultNo);
            }
            return null;
        })
        setDataFlag(true);
    },[ConclusionInfo.data,inspectionCode]);

    return (
        <tr className="conclusion_item">
            <td className="first">{inspectionCode}</td>
            <td className="second"><input type="text" className="result" value={figures} onChange={onChangeFigures} placeholder="결과 입력" /></td>
            <td className="first">{unit}</td>
            <td className="third"><textarea className="note" value={note} onChange={onChangeNote} placeholder="비고" /></td>
        </tr>
    )
};

export default ConclusionItem;

