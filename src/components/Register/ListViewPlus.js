import { useEffect } from "react";
import RegisterItem from "./RegisterItem";
const ListViewPlus =({Listinfoplus,dataInfo})=>{

    useEffect(()=>{
    },[Listinfoplus])
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>상태정보</th>
                    <th>바코드</th>
                    <th>채혈시간</th>
                    <th>채혈자 / 코드</th>
                    <th>오더번호</th>
                    <th>처방코드</th>
                    <th>용기코드</th>
                    <th>검체코드</th>
                    <th>채혈-부적합코드</th>
                    <th>검체-부적합코드</th>
                </tr>
                { Listinfoplus?.data?.length > 0 && Listinfoplus.data.map((data, index) => {
                    return (
                        <RegisterItem
                            data={data}
                            dataInfo = {dataInfo}
                            key={index}
                            statusName={data.statusName}
                            barcode={data.barcode}
                            collectingDt={data.collectingDt}
                            userName={data.userName}
                            collectorId={data.collectorId}
                            orderCode={data.orderCode}
                            prescribeCode={data.prescribeCode}
                            vesselCode={data.vesselCode}
                            sampleCode={data.sampleCode}

                        />
                    );
                })}
                </tbody>
            </table>
        </div>

    )
}

export default ListViewPlus;