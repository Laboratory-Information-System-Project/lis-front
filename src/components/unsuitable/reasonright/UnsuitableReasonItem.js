import React, {useState} from "react";
import ReasonUpdateModal from "../modal/ReasonUpdateModal";
import Modal from "../modal/Modal";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



const UnsuitableReasonItem = ({
    key2,
    notificatorId,
    notifiedId,
    query,
    sampleBarcode,
    selectedReason
  }) => {
    const [reasonUpdate, setReasonUpdate] = useState(false);
    return (
        <>
            
            <div className="reason-item" >
                <div onClick={() => setReasonUpdate(!reasonUpdate)}>{selectedReason}</div>
            </div>
            {reasonUpdate && (
                                    <Modal closeModal={() => setReasonUpdate(!reasonUpdate)}>
                                        <ReasonUpdateModal setReasonUpdate={setReasonUpdate} reasonUpdate={reasonUpdate} detail={query} selectedReason={selectedReason} key2={key2} notificatorId={notificatorId} notifiedId={notifiedId} sampleBarcode={sampleBarcode}/>
                                    </Modal>)}

        </>
        )
}

export default UnsuitableReasonItem;