import React from "react";

const PrescribeItem = ({
    prescribeCode,
    visitStatus,
    statusName,
    orderName,
    prescribeContents,
    prescribeDt,
    doctorId
    
}) => {
    return (
        <>
            <tr>
                <td>{prescribeCode}</td>
                <td>{doctorId}</td>
                <td>{orderName}</td>
                <td>{visitStatus}</td>
                <td>{statusName}</td>
                <td>{prescribeContents}</td>
                <td>{prescribeDt}</td>
                {/* <div className="hidden-text">{prescribeContents}</div> */}
            </tr>
        </>
    )
}

export default PrescribeItem;