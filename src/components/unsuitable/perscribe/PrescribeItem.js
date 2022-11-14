import React from "react";

const PrescribeItem = ({
    bnum,
    prescribeCode,
    visitCode,
    inspectionCode,
    statusCode,
    prescribeContents,
    prescribeDt,
    doctorId
    
}) => {
    return (
        <>
            <tr>
                <td>{bnum}</td>
                <td>{prescribeCode}</td>
                <td>{visitCode}</td>
                <td>{inspectionCode}</td>
                <td>{statusCode}</td>
                <td>{prescribeContents}</td>
                <td>{prescribeDt}</td>
                <td>{doctorId}</td>
            </tr>
        </>
    )
}

export default PrescribeItem;