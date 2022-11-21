import React from "react";

const SampleItem = ({
    barcode,
    statusName,
    barcodeDt,
    collectingDt,
    barcodePrinterId,
    collectorId,
    prescribeCode,

}) => {
    return (
        <>
            <tr>
                <td>{barcode}</td>
                <td>{statusName}</td>
                <td>{barcodeDt}</td>
                <td>{collectingDt}</td>
                <td>{barcodePrinterId}</td>
                <td>{collectorId}</td>
                <td>{prescribeCode}</td>
            </tr>
        </>
    )
}

export default SampleItem;