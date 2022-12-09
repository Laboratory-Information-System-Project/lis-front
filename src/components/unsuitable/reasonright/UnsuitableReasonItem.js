import React, { useState } from "react";
import ReasonUpdateModal from "../modal/ReasonUpdateModal";
import UnsuitableModal from "../modal/Modal1";

const UnsuitableReasonItem = ({
    key2,
    notificatorId,
    notifiedId,
    query,
    sampleBarcode,
    selectedReason,
    selectedReasonName
}) => {
    const [reasonUpdate, setReasonUpdate] = useState(false);
    return (
        <>
            <div className="reason-item" onClick={() => setReasonUpdate(!reasonUpdate)}>
                <div className="item">{selectedReason}</div>
            </div>
            {reasonUpdate && (
                <UnsuitableModal closeModal={() => setReasonUpdate(!reasonUpdate)}>
                    <ReasonUpdateModal setReasonUpdate={setReasonUpdate}
                        key2={key2}
                        reasonUpdate={reasonUpdate}
                        detail={query}
                        selectedReason={selectedReason}
                        notificatorId={notificatorId}
                        notifiedId={notifiedId}
                        sampleBarcode={sampleBarcode}
                        selectedReasonName={selectedReasonName} />
                </UnsuitableModal>)}
        </>
    )
}

export default UnsuitableReasonItem;