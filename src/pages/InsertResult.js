import React, {useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";

import Search from "../components/InsertResult/Search";
import InsertResultAction from "../redux/modules/InsertResult/InsertResultAction";
import PatientList from "../components/InsertResult/PatientList"
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

const InsertResult = () => {
    const {InsertResultInfo} = useSelector((state) => state.InsertResultInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InsertResultAction.getAllPatients());
    },[]);

    const onSubmit = async (query,startDate,endDate,target) => {
        if(query === ''){
            if(startDate === ''){
                dispatch(InsertResultAction.getAllPatients());
            }
            else {
                dispatch(InsertResultAction.searchPatients(query,startDate,endDate,target));
            }
        }
        else{
            if(startDate === ''){
                dispatch(InsertResultAction.searchNoDate(query));
            }
            else {
                dispatch(InsertResultAction.searchPatients(query, startDate, endDate, target));
            }
        }
    };

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>검사결과 등록 <span>Registration of inspection results</span></h2>
                </div>
                <Search onSubmit={onSubmit}/>
                <PatientList InsertResultInfo={InsertResultInfo}/>
            </div>
        </div>
    )
}

export default InsertResult;
