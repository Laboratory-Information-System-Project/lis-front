import React from "react";

const ResultItem = ({
    registerDt,
    sampleName,
    reportedDt,
    inspectionDt,
    figures,
    note,
    sampleNote
}) => {

    return (
        <>  
                <tr>
                    <td>{registerDt}</td>
                    <td>{sampleName}</td>
                    <td>{reportedDt}</td>
                    <td>{inspectionDt}</td>
                    {/* <td>{sampleName}</td> 검사명으로 변경해야함 */}
                    <td>{figures}</td>
                    <td>{note}</td>
                    <td>{sampleNote}</td>
                </tr>
        </>
    );
};

export default ResultItem;







