import React, {useState} from "react";
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import ResultModal from "./ResultModal";

const ResultItem = ({
    registerDt,
    sampleName,
    reportedDt,
    inspectionDt,
    inspectionName,
    figures,
    note,
    sampleNote
}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>  
                <ResultModal 
                    open={modalOpen} 
                    close={closeModal} 
                />
        
                <tr>
                    <td>{registerDt}</td>
                    <td>{sampleName}</td>
                    <td>{reportedDt}</td>
                    <td>{inspectionDt}</td>
                    <td>{inspectionName}</td>
                    <td>{figures}</td>
                    <td onClick={openModal}>{note} </td>
                    <td onClick={openModal}>{sampleNote} </td>
                    <div className="note-text">{note}</div>
                    <div className="sampleNote-text">{sampleNote}</div>
                </tr>

              
        </>
    );
};

export default ResultItem;







