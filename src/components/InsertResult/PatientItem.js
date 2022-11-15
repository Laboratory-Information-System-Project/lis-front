import React, {useEffect, useState} from 'react';
import Modal from "../common/Modal";
import AddResult from "./AddResult"
import ChangeResult from "./ChangeResult"
import ChangeResultAction from "../../redux/modules/InsertResult/ChangeResultAction";
import {useDispatch, useSelector} from "react-redux";

const PatientItem = ({
    bnum,
    btitle,
    bwriter,
    bcontent,
    bdate
    }) => {

    const [add, setAdd] = useState(false);
    const [change, setChange] = useState(false);
    const [checkBtn, setCheckBtn] = useState(false);

    console.log(checkBtn);

    return (
        <tr>
            <td>{bnum}</td>
            <td>{btitle}</td>
            <td>{bwriter}</td>
            <td>{bdate}</td>
            <td>
                <button className="result_btn" onClick={() => setAdd(!add)} > 등록 </button>
                {add && (
                    <Modal closeModal={() => setAdd(!add)}>
                        <AddResult bnum={bnum} closeModal={()=>setAdd(!add)}/>
                    </Modal>
                )}
            </td>
            <td>
                <button className="change_btn" onClick={() => setChange(!change)} > 수정 </button>
                {change && (
                    <Modal closeModal={() => setChange(!change)}>
                        <ChangeResult bnum={bnum} closeModal={()=>setChange(!change)}/>
                    </Modal>
                )}
            </td>
        </tr>
    )
};

export default PatientItem;

