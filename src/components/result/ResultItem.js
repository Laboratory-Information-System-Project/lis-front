import React from "react";

const ResultItem = ({
    result_no,
    register_code,
    figures,
    inspection_dt,
    note,
    sample_note
}) => {
    
    return (
        <>  
                <tr>
                    <td>{result_no}</td>
                    <td>{register_code}</td>
                    <td>{figures}</td>
                    <td>{inspection_dt}</td>
                    <td>{note}</td>
                    <td>{sample_note}</td>
                </tr>
        </>
    );
};

export default ResultItem;







