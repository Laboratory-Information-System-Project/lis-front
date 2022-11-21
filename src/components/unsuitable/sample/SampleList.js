import SampleItem from "./SampleItem";

const SampleList = ({ sampleInfo }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <th>바코드</th>
                    <th>검사상태</th>
                    <th>바코드출력일자</th>
                    <th>채취일자</th>
                    <th>간호사</th>
                    <th>검사자</th>
                    <th>처방코드</th>
                </tr>
                {sampleInfo.data.barcode &&
                    <SampleItem
                        barcode={sampleInfo.data.barcode}
                        statusName={sampleInfo.data.status_name}
                        barcodeDt={sampleInfo.data.barcode_dt}
                        collectingDt={sampleInfo.data.collecting_dt}
                        barcodePrinterId={sampleInfo.data.barcode_printer_id}
                        collectorId={sampleInfo.data.collector_id}
                        prescribeCode={sampleInfo.data.prescribe_code}
                    />
                }
            </tbody>
        </table>
    )
}

export default SampleList;