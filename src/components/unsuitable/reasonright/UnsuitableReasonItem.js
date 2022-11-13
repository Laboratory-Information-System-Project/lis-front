import React, {useState} from "react";
import ReasonUpdateModal from "../modal/ReasonUpdateModal";
import Modal from "../modal/Modal";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



const UnsuitableReasonItem = ({
    key2,
    employeeAuthority,
    employeeName,
    detail,
    sampleBarcode,
    category,
    reason
    
  }) => {
    const [reasonUpdate, setReasonUpdate] = useState(false);

    return (
        <>
            
            <div className="reason-item" >
                <p onClick={() => setReasonUpdate(!reasonUpdate)}>{reason}<DeleteForeverOutlinedIcon /></p> 
            </div>
            {reasonUpdate && (
                                    <Modal closeModal={() => setReasonUpdate(!reasonUpdate)}>
                                        <ReasonUpdateModal setReasonUpdate={setReasonUpdate} reasonUpdate={reasonUpdate} detail={detail} reason={reason} key2={key2} category={category} employeeAuthority={employeeAuthority} employeeName={employeeName} sampleBarcode={sampleBarcode}/>
                                    </Modal>)}

        </>
        )
}

export default UnsuitableReasonItem;