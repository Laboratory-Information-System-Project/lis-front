import UnsuitableUserItem from "./UnsuitableUserItem";

const UnsuitableUserList = ({ userInfo, setGetUserName }) => {

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
                                name={data.name}
                                authority={data.authority}
                                userEmail={data.userEmail}
                                setGetUserName={setGetUserName}
                            />
                        )
                    })}
            </tbody>
        </table>
    )
}

export default UnsuitableUserList;