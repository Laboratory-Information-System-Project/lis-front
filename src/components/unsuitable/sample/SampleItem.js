import React from "react";

const SampleItem = ({
    bnum,
    btitle,
    bwriter,
    bcontent
}) => {
    return (
        <>
            <tr>
                <td>{bnum}</td>
                <td>{btitle}</td>
                <td>{bwriter}</td>
                <td>{bcontent}</td>
            </tr>
        </>
    )
}

export default SampleItem;