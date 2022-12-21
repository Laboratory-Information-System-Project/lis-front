import React, {useEffect, useState} from 'react';

import "../../styles/insertResult/insertResult.scss";
import CuModal from "./modal/CuModal";
import SuModal from "./modal/SuModal";
import ModalSecond from "./modal/ModalSecond";
import { FaCheck, FaFileAlt } from "react-icons/fa";


const RegisterItem = ({data, onConclusion,UnsuitableStatusInfo}) => {

    let resultCheck;
    let suCheck = '-';
    let cuCheck = '-';

    const [cuModal,setCuModal]=useState(false);
    const [suModal,setSuModal]=useState(false);

    if(data.statusCode==='D'){
        resultCheck=<FaCheck color="red"/>;
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
        } else{
            onClick()
        }
        e.target.classList.remove('clicked')
    }

    const onSu=(e)=>{
        if(suCheck === '상세보기'){
            setSuModal(!suModal)
        } else{
            onClick()
        }
        e.target.classList.remove('clicked')
    }

    return (
        <tr onClick={onClick} className="changeColor" >
            <td>{data.patientNo}</td>
            <td>{data.barcode}</td>
            <td>{data.orderCode}</td>
            <td onClick={onCu}>{cuCheck}
                {cuModal && (
                    <ModalSecond closeModal={() => setCuModal(!cuModal)}>
                        <CuModal UnsuitableStatusInfo={UnsuitableStatusInfo} pre={data.prescribeCode}/>
                    </ModalSecond>
                )}</td>
            <td onClick={onSu}>{suCheck}
                {suModal  && (
                <ModalSecond closeModal={() => setSuModal(!suModal)}>
                    <SuModal UnsuitableStatusInfo={UnsuitableStatusInfo} pre={data.prescribeCode}/>
                </ModalSecond>
            )}</td>
            <td>{resultCheck}</td>
            <td>{data.registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

