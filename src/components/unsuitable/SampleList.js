import SampleItem from "./SampleItem";

const SampleList = ({ unsuitableInfo }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <th>바코드</th>
                    <th>검체번호</th>
                    <th>검체이름</th>
                    <th>검사상태</th>
                    <th>채혈자</th>
                    <th>채혈시간</th>
                    <th>채취시간</th>
                </tr>

                    {unsuitableInfo?.data?.length > 0 && unsuitableInfo.data.map((data, index) => {
                        return (
                            <SampleItem
                                key={index}
                                bnum={data.bnum}
                                btitle={data.btitle}
                                bwriter={data.bwriter}
                                bcontent={data.bcontent}
                            />
                        )

                    })}
            </tbody>
        </table>
    )
}

export default SampleList;