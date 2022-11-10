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

    const [target, setTarget] = useState('');

    const dispatch = useDispatch();

    const sendUserInfo = async (pickUser, target) => {
        dispatch(UnsuitableActions.getOneUser(pickUser, target));
    }

    const selectUser = useCallback(() => {
        sendUserInfo(pickUser, target);
    }, [sendUserInfo, pickUser, target]);

   

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