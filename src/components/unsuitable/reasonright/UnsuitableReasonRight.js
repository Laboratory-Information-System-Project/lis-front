import React from "react";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import UnsuitableReasonList from "./UnsuitableReasonList";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import { ToastContainer, toast } from 'react-toastify';


const UnsuitableReasonRight = ( {unsuitableSampleInfo} ) => {
    const dispatch = useDispatch();

    const registryUnsuitableSampleBtn = (e) => {
        if(unsuitableSampleInfo.data.length > 1){
            if (window.confirm("등록하시겠습니까?")) {
                unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((data, key) => {
                            if(key > 0) {
                                
                                let unsuitInfo ={
                                    "barcode": data.sampleBarcode, 
                                    "unsuitableReasonCode": data.selectedReason,
                                    "unsuitableReasonDetail": data.query,
                                    "notifiedUserId": data.notifiedId   ,
                                    "notificatorId" : data.notificatorId,
                                }
                                dispatch(UnsuitableActions.postUnsuitInfo(unsuitInfo));
                                console.log(unsuitInfo);
                            }
                        })
                        alert('부적합 검체가 등록되었습니다.');
            } else {
                e.preventDefault();
                return ;
            }
        } else {
            e.preventDefault();
            toast.error("부적합 검체 등록을 위한 과정을 진행해주세요.", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }
    return (
        <div className="unsuitable-wrap right">
                        <div className="con-title">
                            <TextSnippetOutlinedIcon />
                            <p>부적합 사유</p>
                        </div>
                        <form>
                            <div className="selected-reason">
                                <UnsuitableReasonList unsuitableSampleInfo={unsuitableSampleInfo}/>
                            </div>
                                <button className="btn" onClick={registryUnsuitableSampleBtn}>등록</button>
                        </form>
                        <ToastContainer
                            position='top-right'
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
    )
}

export default UnsuitableReasonRight;