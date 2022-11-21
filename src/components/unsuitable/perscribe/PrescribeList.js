import PrescribeItem from "./PrescribeItem";

const PrescribeList = ( { prescribeInfo } ) => {
    
    return(
        <table>
            <tbody>
                <tr>
                    <th>처방코드</th>
                    <th>내원코드</th>
                    <th>검사코드</th>
                    <th>오더코드</th>
                    <th>증상</th>
                    <th>처방일자</th>
                    <th>의사코드</th>
                </tr>
                            {prescribeInfo.data.prescribeCode &&
                            <PrescribeItem
                                prescribeCode={prescribeInfo.data.prescribeCode}
                                visitCode={prescribeInfo.data.visit.visitStatus}
                                inspectionCode={prescribeInfo.data.inspectionType.inspectionName}
                                statusCode={prescribeInfo.data.inspectionType.order.orderCode}
                                prescribeContents={prescribeInfo.data.prescribeContents}
                                prescribeDt={prescribeInfo.data.prescribeDt}
                                doctorId={prescribeInfo.data.doctorId}
                            />
                        }

            </tbody>
        </table>
    )
}

export default PrescribeList;