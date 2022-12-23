import ConclusionItem from "./ConclusionItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import React, {useEffect, useState} from "react";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import {useDispatch, useSelector} from "react-redux";
import DefaultData from "../common/DefaultData/DefaultData"
import Swal from "sweetalert2";

const ConclusionList = ({ConclusionInfo, code,order, register}) => {

    const Toast = Swal.mixin({
        toast: true,
        icon: 'warning',
        position: 'top-right',
        width: 410,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        background:'#EEEEEE',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const {InspectionTypeInfo} = useSelector((state) => state.InspectionTypeInfo);

    const dispatch = useDispatch();

    const [conclusionDataList,setConclusionDataList]=useState([]);
    const [disable,setDisable] = useState(false);
    const [firstList,setFirstList] = useState([]);

    const addResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            Toast.fire({
                title:"검사결과를 입력해주세요",
            })
            return
        }
        dispatch(InsertResultAction.insertConclusionResult(conclusionDataList));
        setDisable(true);
        Swal.fire({
            title: '검체:'+code+' 결과 등록 되었습니다.',
            icon: 'success',
            confirmButtonColor: '#3C9DF6',
            confirmButtonText: '확인'
        })
        setConclusionDataList([]);
        dispatch(InsertResultAction.getSearchInspectionType(''));
    });


    const updateResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            Toast.fire({
                title:"검사결과를 입력해주세요",
            })
            return
        }

        for(let i=0; i<conclusionDataList.length; i++){
            if(ConclusionInfo.data[i].figures !== conclusionDataList[i].figures || ConclusionInfo.data[i].note !== conclusionDataList[i].note){{
                dispatch(InsertResultAction.updateConclusion(conclusionDataList));
                Swal.fire({
                    title: '검체:'+code+' 결과 수정 되었습니다.',
                    icon: 'success',
                    onfirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인'
                })
                return;
            }
            }else{
                Toast.fire({
                    title:"수정사항이 없습니다.",
                })
            }
        }

    });


    const finalResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            Toast.fire({
                title:"검사결과를 입력해주세요",
            })
            return
        }

        if(conclusionDataList.length > 0 && ConclusionInfo?.data?.length>0){
            for(let i=0; i<conclusionDataList.length;i++){

                if(ConclusionInfo.data[i].figures !== conclusionDataList[i].figures || ConclusionInfo.data[i].note !== conclusionDataList[i].note
                ) {
                    Swal.fire({
                        title: '수정사항이 있습니다.\n 수정버튼을 눌러주세요',
                        icon: 'info',
                        confirmButtonColor: '#3C9DF6',
                        confirmButtonText: '확인'
                    })
                    return;
                }
            }
            Swal.fire({
                icon: "question",
                title: "이후 수정이 불가능합니다 \n 최종 등록하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "등록",
                cancelButtonText: "취소",
            }).then((res) => {
                if (res.isConfirmed) {
                    dispatch(InsertResultAction.updateStatus(register));
                    Swal.fire('최종 등록이 완료되었습니다.', 'success');
                    dispatch(InsertResultAction.getSearchInspectionType(''));
                }
            });
        }
    });


    useEffect(()=>{
        if(conclusionDataList.length>0 && conclusionDataList[0].figures === ''){
            setDisable(false);
        } else if(conclusionDataList.length>0 && conclusionDataList[0].figures !== ''){
            setDisable(true);
        }
    },[conclusionDataList]);

    useEffect(()=>{
        setConclusionDataList([]);
        if(code ===  ''){
            dispatch(InsertResultAction.getSearchInspectionType(''));
        }
    },[code,order]);

    return (
        <div className="content">
            <div className="right_con_title">
                <ArticleOutlinedIcon/>
                <p>결과 입력</p>
                <div className="title_barcode">
                    <p>{code !== '' ? `(검체번호 : ${code} 오더번호 : ${order})` : ""}</p>
                </div>
            </div>
            {InspectionTypeInfo?.data?.length > 0?
                <div>
                    <div className="table_height table_scroll">
                        <table>
                            <tbody>
                            <tr className="table_title">
                                <th>검사이름</th>
                                <th>검사 결과</th>
                                <th>단위</th>
                                <th>비고</th>
                            </tr>
                            {InspectionTypeInfo?.data?.length > 0 && InspectionTypeInfo.data.map((data, index) => {
                                return(
                                    <ConclusionItem
                                        key={index}
                                        ConclusionInfo={ConclusionInfo}
                                        orderCode={data.orderCode}
                                        inspectionCode={data.inspectionCode}
                                        unit={data.unit}
                                        registerCode={register}
                                        barcode={code}
                                        conclusionDataList={conclusionDataList}
                                        setConclusionDataList={setConclusionDataList}
                                        setFirstList={setFirstList}
                                    />
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="footer">
                        <button disabled={disable} className="item_btn" onClick={addResult}>임시등록</button>
                        <button disabled={!disable} className="item_btn" onClick={updateResult}>수정</button>
                        <button disabled={!disable} className="item_btn" onClick={finalResult}>최종등록</button>
                    </div>
                </div>
                :
                <div className="default_position">
                    <DefaultData division="1" />
                </div>}
        </div>
    )
}


export default ConclusionList;