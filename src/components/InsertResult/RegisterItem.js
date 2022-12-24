import React, {useState} from 'react';

import "../../styles/insertResult/insertResult.scss";
import CuModal from "./modal/CuModal";
import SuModal from "./modal/SuModal";
import ModalSecond from "./modal/ModalSecond";

const RegisterItem = ({data, onConclusion,UnsuitableStatusInfo}) => {

    let resultCheck;
    let suCheck = '-';
    let cuCheck = '-';

    const [cuModal,setCuModal]=useState(false);
    const [suModal,setSuModal]=useState(false);

    if(data.statusCode==='D'){
        resultCheck='V';
        // resultCheck='O';
        // resultCheck='◎';
    } else{
        resultCheck='-';
    };

    if(UnsuitableStatusInfo?.data?.length >0 && UnsuitableStatusInfo.data.map(item=>{
        if(data.prescribeCode === item.prescribeCode){
            if(item.unsuitableStatusCode==="CU"){
                cuCheck='상세보기'
            }
            if(item.unsuitableStatusCode==="SU"){
                suCheck='상세보기'
            }
        }
        return null
    }));

    const onClick =(e)=>{
        let lineList =document.querySelectorAll('.changeColor');

        for(let i =0; i<lineList.length;i++){
            lineList[i].classList.remove('clicked')
        }

        e.target.parentElement.classList.add('clicked')

        onConclusion(data.barcode, data.registerCode, data.orderCode);
    }

    const onCu=(e)=>{
        if(cuCheck === '상세보기'){
            setCuModal(!cuModal)
        }
    }

    const onSu=(e)=>{
        if(suCheck === '상세보기'){
            setSuModal(!suModal)
        }
    }

    return (
        <tr className="changeColor">
            <td onClick={onClick}>{data.patientNo}</td>
            <td onClick={onClick}>{data.barcode}</td>
            <td onClick={onClick}>{data.orderCode}</td>
            <td onClick={cuCheck==="상세보기"?onCu:onClick}>{cuCheck}
                {cuModal && (
                    <ModalSecond closeModal={() => setCuModal(!cuModal)}>
                        <CuModal UnsuitableStatusInfo={UnsuitableStatusInfo} pre={data.prescribeCode} barcode={data.barcode} orderCode={data.orderCode}/>
                    </ModalSecond>
                )}</td>
            <td onClick={suCheck==="상세보기"?onSu:onClick}>{suCheck}
                {suModal  && (
                <ModalSecond closeModal={() => setSuModal(!suModal)}>
                    <SuModal UnsuitableStatusInfo={UnsuitableStatusInfo} pre={data.prescribeCode} barcode={data.barcode} orderCode={data.orderCode}/>
                </ModalSecond>
            )}</td>
            <td className="resultCheck" onClick={onClick}>{resultCheck}</td>
            <td onClick={onClick}>{data.registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

