import React, {useEffect, useState} from 'react';
import Modal from "../common/Modal";
import AddResult from "./AddResult"
import ChangeResult from "./ChangeResult"

import "../../styles/insertResult/insertResult.scss";

const RegisterItem = ({registerCode, statusCode, registerDt, barcode, inspectorId, ConclusionInfo, page}) => {
    const [add, setAdd] = useState(false);
    const [update, setUpdate] = useState(false);
    const [disable,setDisable] = useState(false);

    useEffect(() => {
        setDisable(false);
        ConclusionInfo?.data?.length > 0 && ConclusionInfo.data.map((data) => {
            if (data.registerCode === registerCode) {
                setDisable(true);
            }
        })
    },[page]);

    return (
        <tr>
            <td>{barcode}</td>
            <td>{inspectorId}</td>
            <td>{statusCode}</td>
            <td>{registerDt.replace('T',' ')}</td>
            <td>
                <button disabled={disable} className="item_btn" onClick={() => setAdd(!add)} > 등록 </button>
                {add && (
                    <Modal closeModal={
                        (e) =>{
                        if (window.confirm("정보가 저장되지않았습니다. 종료 하시겠습니까?") == true){
                            setAdd(!add)}
                        else{
                            e.preventDefault()
                        }}}
                        >
                        <AddResult registerCode={registerCode} barcode={barcode} closeModal={()=>setAdd(!add)}/>
                    </Modal>
                )}
            </td>
            <td>
                <button disabled={!disable} className="item_btn" onClick={() => setUpdate(!update)} > 수정 </button>
                {update && (
                    <Modal closeModal={(e) =>{
                        if (window.confirm("정보가 수정되지않았습니다. 종료 하시겠습니까?") == true){
                            setUpdate(!update)}
                        else{
                            e.preventDefault()
                        }}}>
                        <ChangeResult registerCode={registerCode} ConclusionInfo={ConclusionInfo}  barcode={barcode} closeModal={()=>setUpdate(!update)}/>
                    </Modal>
                )}
            </td>
        </tr>
    )
};

export default RegisterItem;

