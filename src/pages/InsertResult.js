import React, {useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";

import Search from "../components/InsertResult/Search";
import InsertResultAction from "../redux/modules/InsertResult/InsertResultAction";
import RegisterList from "../components/InsertResult/RegisterList"
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

const InsertResult = () => {
    const {RegisterInfo} = useSelector((state) => state.RegisterInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InsertResultAction.getTodayRegister());
    },[]);

    const onSubmit = async (barcode,stDate,endDate) => {
        dispatch(InsertResultAction.getSearchRegister(barcode,stDate,endDate));
        console.log(barcode,stDate,endDate);

    };

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>검사결과 등록 <span>Registration of inspection results</span></h2>
                </div>
                <Search onSubmit={onSubmit}/>
                <RegisterList RegisterInfo={RegisterInfo}/>
            </div>
        </div>
    )
}

export default InsertResult;
