import React from "react";

const ChartDataItem = ({
    sampleName,
    figures,
    registerDt
}) => {
    return (
        <>
            <tr>
                <td>{sampleName}</td>
                <td>10 / -</td>
                <td>{figures}</td>
                <td>{registerDt}</td>
            </tr>
        </>
    )
};

export default ChartDataItem;

