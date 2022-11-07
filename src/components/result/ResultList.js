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
                    <th>결과</th>
                    <th>HL</th>
                    <th>상태</th>
                    <th>비고</th>
                    <th>검체비고</th>
                </tr>
        
                    { resultInfo?.data?.length > 0 && resultInfo.data.map((data, index) => {
                           return (
                                <ResultItem
                                    key={index}
                                    result_no={data.result_no}
                                    register_code={data.register_code}
                                    figures={data.figures}
                                    inspection_dt={data.inspection_dt}
                                    note={data.note}
                                    sample_note={data.sample_note}   
                               />
                           );
                    })} 
               
            </tbody>
        </table>
       
    )
}

export default ResultList;