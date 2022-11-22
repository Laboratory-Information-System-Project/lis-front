import UnsuitableUserItem from "./UnsuitableUserItem";

const UnsuitableUserList = ({ userInfo, setSelectUser }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>직급</th>
                    <th>E-mail</th>
                </tr>
                    {userInfo?.data?.length > 0 && userInfo.data.map((data, index) => {
                        return (
                            <UnsuitableUserItem
                                key={index}
                                userId={data.userId}
                                name={data.userName}
                                userEmail={data.userEmail}
                                authority={data.authority}
                                setSelectUser={setSelectUser}
                            />
                        )
                    })}
            </tbody>
        </table>
    )
}

export default UnsuitableUserList;