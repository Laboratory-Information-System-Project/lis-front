import React from "react";

const DataItem = ({
    unsuitableStatusCode,prescribeCode
}) => {

    return(
        <tr>
            <td>{prescribeCode}</td>
            <td>{unsuitableStatusCode}</td>
        </tr>
    );
}
export default DataItem;