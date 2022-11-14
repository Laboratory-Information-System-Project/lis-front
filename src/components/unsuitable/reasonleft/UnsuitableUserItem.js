import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";



const UnsuitableUserItem = ({
    userId,
    name,
    authority,
    userEmail,
}) => {

    const pickUser = {userId, name, authority}; 

    const dispatch = useDispatch();

    const sendUserInfo = async (pickUser) => {
        dispatch(UnsuitableActions.getOneUser(pickUser));
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