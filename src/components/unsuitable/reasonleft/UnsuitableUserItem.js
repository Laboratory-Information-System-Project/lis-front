import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";



const UnsuitableUserItem = ({
    userId,
    name,
    authority,
    userEmail,
    setGetUserName
}) => {

    const pickUser = {userId, name, authority, userEmail}; 

    //store
    // const [query, setQuery] = useState({
        
    //     authority : " ",
    //     name : " ",
    //     userEmail :" ",
    //     userId : " "
    // });
    const [target, setTarget] = useState('');

    const dispatch = useDispatch();

    const onSend = async(query, target) => {
        
        dispatch(UnsuitableActions.getOneUser(query, target));

        console.log(query);

    }

    //useState
    const selectUser = async() => {
        setGetUserName(JSON.parse(JSON.stringify({pickUser})));

    }
        
     

    return (
        <>
          <tr>
                <td><input type="radio"
                            name="user"
                            onClick={() => {
                                selectUser();
                            
                            }}
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