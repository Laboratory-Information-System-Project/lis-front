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
                    {/* <th>검사명</th> */}
                    <th>수치</th>
                    {/* <th>HL</th> */}
                    <th>비고</th>
                    <th>검체비고</th>
                </tr>
                {/* private String registerDt;
    private int patientNo;
    private String sampleName;
    private String reportedDt;
    private String inspectionDt;
    private int figures;
    private String note;
    private String sampleNote; */}
        
                    { resultInfo?.data?.length > 0 && resultInfo.data.map((data, index) => {
                           return (
                                <ResultItem
                                    key={index}
                                    registerDt={data.registerDt}
                                    sampleName={data.sampleName}
                                    reportedDt={data.reportedDt}
                                    inspectionDt={data.inspectionDt}
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