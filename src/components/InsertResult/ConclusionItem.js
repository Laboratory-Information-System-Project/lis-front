import React, {useEffect, useState} from 'react';

import "../../styles/insertResult/insertResult.scss";

const ConclusionItem = ({ConclusionInfo, inspectionCode, unit, registerCode, conclusionDataList, setConclusionDataList, barcode}) => {

    const [figures,setFigures]=useState('');
    const [note,setNote]=useState('');
    const [resultNo,setResultNo]=useState('');

    const [conclusionData,setConclusionData]=useState({});

    const [dataFlag,setDataFlag] = useState(false);
    const [listFlag,setListFlag] = useState(false);

    const onChangeFigures = (e) => {
        if (e.target.value >= 0) {
            if (e.target.value.length > 15) {
                if (e.target.value > 999999999999999) {
                    alert("입력가능한 범위를 벗어났습니다.");
                }
                e.target.value = e.target.value.slice(0, 15);
            }
        } else {
            alert("입력가능한 범위를 벗어났습니다.");
            e.target.value = '';
        }
        setFigures(() => e.target.value);

        conclusionDataList.map(data=>{
            if(data.inspectionCode === inspectionCode){
                data.figures=e.target.value;
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

