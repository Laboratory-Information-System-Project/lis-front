
import styled from "@emotion/styled";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const RegisterItem = ({
                          barcode,dataInfo,userName,collectingDt,orderCode,vesselCode,sampleCode,prescribeCode,statusName,collectorId,data
                      }) => {

    if(statusName === '채혈'){
        var Color = styled('td')({
            backgroundColor: '#5FE73A'
        });
    }else if(statusName === '검체접수'){
        var Color = styled('td')({
            backgroundColor: '#E9B065'
        });
    }
    const[a,setA]= useState('-');
    const[b,setB]= useState('-');

    useEffect(()=>{
        setA("-")
        setB("-")
        dataInfo?.data?.length > 0 && dataInfo.data.map((data2)=>{
                if(data.prescribeCode === data2.prescribe_code){
                    if(data2.unsuitable_status_code === "CU"){
                        setA("CU")
                    }else if(data2.unsuitable_status_code === "SU"){
                        setB("SU")
                    }
                }
                return(<></>)
            }
        );
    },[dataInfo,data.prescribeCode])

    return(

        <tr>
            <td>{barcode}</td>
            <Color>{statusName}</Color>
            <td>{collectingDt}</td>
            <td>{userName} / {collectorId}</td>
            <td>{orderCode}</td>
            <td>{prescribeCode}</td>
            <td>{vesselCode}</td>
            <td>{sampleCode}</td>
            <td>{a}</td>
            <td>{b}</td>
        </tr>
    );
}
export default RegisterItem;