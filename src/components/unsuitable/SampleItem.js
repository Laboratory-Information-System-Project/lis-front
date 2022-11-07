import React from "react";

const SampleItem = ({
    b_num,
    b_title,
    b_writer,
    b_content
}) => {
    return (
        <>
            <tr>
                <td>{b_num}</td>
                <td>{b_title}</td>
                <td>{b_writer}</td>
                <td>{b_content}</td>
            </tr>
        </>
    )
}

export default SampleItem;