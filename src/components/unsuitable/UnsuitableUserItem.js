import React from "react";

const UnsuitableUserItem = ({
    userId,
    name,
    authority,
    userEmail,
}) => {
    return (
        <>
          <tr>
                <td>{userId}</td>
                <td>{name}</td>
                <td>{authority}</td>
                <td>{userEmail}</td>
            </tr>
        </>
    )
}

export default UnsuitableUserItem;