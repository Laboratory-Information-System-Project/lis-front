import PrescribeItem from "./PrescribeItem";

const PrescribeList = ( { prescribeInfo } ) => {

    const dtat = prescribeInfo.data;
    console.log(dtat?.length);
    return(
        <table>
            <tbody>
                <tr>
                    <th>바코드</th>
                    <th>처방코드</th>
                    <th>내원코드</th>
                    <th>검사코드</th>
                    <th>검사상태코드</th>
                    <th>증상</th>
                    <th>처방일자</th>
                    <th>의사코드</th>
                </tr>

                    {prescribeInfo?.data?.length > 0 && prescribeInfo.data.map((data, index) => {
                        return (
                            <PrescribeItem
                                key={index}
                                bnum={data.bnum}
                                prescribeCode={data.prescribeCode}
                                visitCode={data.visitCode}
                                inspectionCode={data.inspectionCode}
                                statusCode={data.statusCode}
                                prescribeContents={data.prescribeContents}
                                prescribeDt={data.prescribeDt}
                                doctorId={data.doctorId}
                            />
                          
                        )

                    })}
            </tbody>
        </table>
    )
}

export default PrescribeList;