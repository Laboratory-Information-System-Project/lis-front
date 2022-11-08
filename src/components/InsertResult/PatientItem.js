import React, {useState} from 'react';
import Modal from "../common/Modal";
import AddContent from "./AddContent"

const PatientItem = ({
    bnum,
    btitle,
    bwriter,
    bcontent
    }) => {

    const [add, setAdd] = useState(false);
    const [change, setChange] = useState(false);


    return (
        <tr>
            <td>{bnum}</td>
            <td>{btitle}</td>
            <td>{bwriter}</td>
            <td>
                <button className="result_btn" onClick={() => setAdd(!add)} > 등록 </button>
                {add && (
                    <Modal closeModal={() => setAdd(!add)}>
                        <AddContent closeModal={()=>setAdd(!add)}/>
                    </Modal>
                )}
            </td>
            <td><button className="result_btn" onClick={() => setChange(!change)} > 수정 </button></td>
        </tr>
    )
};

export default PatientItem;

