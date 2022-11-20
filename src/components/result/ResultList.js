import ResultItem from "./ResultItem";

const ResultList = ({ resultInfo }) => {    
    return (
        <table>
            <tbody>
                <tr>
                    <th>접수일</th>
                    <th>검체명</th>
                    <th>보고일</th>
                    <th>오더일</th>
                    <th>검사명</th>
                    <th>수치</th>
                    {/* <th>HL</th> */}
                    <th>비고</th>
                    <th>검체비고</th>
                    <th>결과발송</th>
                </tr>
        
                    { resultInfo?.data?.length > 0 && resultInfo.data.map((data, index) => {
                           return (
                                <ResultItem
                                    key={index}
                                    registerDt={data.registerDt}
                                    sampleName={data.sampleName}
                                    reportedDt={data.reportedDt}
                                    inspectionDt={data.inspectionDt}
                                    inspectionName={data.inspectionName}
                                    figures={data.figures}
                                    note={data.note}
                                    sampleNote={data.sampleNote}   
                               />
                           );
                    })} 
               
            </tbody>
        </table>
       
    )
}

export default ResultList;