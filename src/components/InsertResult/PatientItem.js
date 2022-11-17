import React, {useEffect, useState} from 'react';
import Modal from "../common/Modal";
import AddResult from "./AddResult"
import ChangeResult from "./ChangeResult"

import "../../styles/insertResult/insertResult.scss";

const PatientItem = ({
    bnum, btitle, bwriter, bcontent, bdate, ChangeResultInfo,page
    }) => {
    const [add, setAdd] = useState(false);
    const [change, setChange] = useState(false);
    const [disable,setDisable] = useState(false);

    useEffect(() => {
        setDisable(false);
        ChangeResultInfo.data.map((data, index) => {
            if (data.registerCode == bnum) {
                setDisable(true);
                console.log("=========effect=========");
            }
        })
    },[page]);

    return (
        <tr>
            <td>{bnum}</td>
            <td>{btitle}</td>
            <td>{bwriter}</td>
            <td>{bdate}</td>
            <td>
                <button disabled={disable} className="item_btn" onClick={() => setAdd(!add)} > 등록 </button>
                {add && (
                    <Modal closeModal={() => setAdd(!add)}>
                        <AddResult bnum={bnum} closeModal={()=>setAdd(!add)}/>
                    </Modal>
                )}
            </td>
            <td>
                <button disabled={!disable} className="item_btn" onClick={() => setChange(!change)} > 수정 </button>
                {change && (
                    <Modal closeModal={() => setChange(!change)}>
                        <ChangeResult bnum={bnum} ChangeResultInfo={ChangeResultInfo} closeModal={()=>setChange(!change)}/>
                    </Modal>
                )}
            </td>
        </tr>
    )
};

export default PatientItem;

