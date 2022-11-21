import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const UnsuitableUserItem = ({
    userId,
    name,
    authority,
    userEmail,
    setSelectUser
}) => {

    const pickUser = {userId, name, authority}; 

    const sendUserInfo = async (pickUser) => {
        setSelectUser(pickUser);
    }

    const selectUser = useCallback(() => {
        sendUserInfo(pickUser);
    }, [sendUserInfo, pickUser]);

    return (
        <>
          <tr>
                <td><input type="radio"
                            name="user"
                            onClick={selectUser}
                            ></input></td>
                <td>{userId}</td>
                <td>{name}</td>
                <td>{authority}</td>
                <td>{userEmail}</td>
            </tr>
        </>
    )
}

export default UnsuitableUserItem;