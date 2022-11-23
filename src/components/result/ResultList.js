import ResultItem from './ResultItem';
import styled from 'styled-components';

const ResultList = ({ resultInfo }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>접수일</th>
                    <th>검체명</th>
                    <th>오더일</th>
                    <th>검사명</th>
                    <th>수치</th>
                    <th>참고치/단위</th>
                    <th>HL</th>
                    <th>비고</th>
                    <th>검체비고</th>
                    <th>결과발송</th>
                </tr>

                {resultInfo?.data?.length > 0 &&
                    resultInfo.data.map((data, index) => {
                        return (
                            <ResultItem
                                key={index}
                                registerDt={data.registerDt}
                                sampleName={data.sampleName}
                                prescribeDt={data.prescribeDt}
                                inspectionName={data.inspectionName}
                                figures={data.figures}
                                baseline={data.baseline}
                                unit={data.unit}
                                note={data.note}
                                sampleNote={data.sampleNote}
                                resultInfo={resultInfo}
                                patientNo={data.patientNo}
                                patientName={data.patientName}
                                patientPhoneNumber={data.patientPhoneNumber}
                            />
                        );
                    })}
            </tbody>
        </table>
    );
};

export default ResultList;
