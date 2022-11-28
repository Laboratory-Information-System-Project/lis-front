import React, {useCallback, useEffect, useState} from 'react';

import "../../styles/insertResult/insertResult.scss";

const ConclusionItem = ({ConclusionInfo, inspectionCode, unit, registerCode, conclusionDataList, setConclusionDataList}) => {

    const [figures,setFigures]=useState('');
    const [note,setNote]=useState('');
    const [resultNo,setResultNo]=useState('');

    const [conclusionData,setConclusionData]=useState({});

    const [dataFlag,setDataFlag] = useState(false);
    const [listFlag,setListFlag] = useState(false);

    const onChangeFigures = useCallback(e => {
        setFigures(() => e.target.value);

        conclusionDataList.map(data=>{
            if(data.inspectionCode === inspectionCode){
                data.figures=e.target.value;
            }
        })
    }, [figures]);

    const onChangeNote = useCallback(e => {
        setNote(() => e.target.value);

        conclusionDataList.map(data=>{
            if(data.inspectionCode === inspectionCode){
                data.note=e.target.value;
            }
        })
    }, [note]);


    useEffect(()=>{
        if(listFlag){
            if(conclusionDataList.find(item => item.inspectionCode===inspectionCode)){
                return
            }
            setConclusionDataList(conclusionDataList => [...conclusionDataList, conclusionData]);
        }
    },[listFlag])

    useEffect(()=>{
        if(dataFlag){
            setConclusionData({resultNo, inspectionCode, registerCode, figures, note});
            setListFlag(true);
        }
    },[dataFlag])

    useEffect(()=>{
        ConclusionInfo?.data?.length > 0 && ConclusionInfo.data.map(data => {
            if(data.inspectionCode === inspectionCode){
                setFigures(data.figures);
                setNote(data.note);
                setResultNo(data.resultNo);
            }
        })
        setDataFlag(true);
    },[]);

    return (
        <tr className="conclusion_item">
            <td>{inspectionCode}</td>
            <td><input type="text" className="result" value={figures} onChange={onChangeFigures} placeholder="결과 입력" /></td>
            <td>{unit}</td>
            <td><textarea className="note" value={note} onChange={onChangeNote} placeholder="비고" /></td>
        </tr>
    )
};

export default ConclusionItem;

