import { useSelector } from "react-redux";
import UnsuitableCodeItem from "./UnsuitableCodeItem";
import React from "react";

const UnsuitableCodeList = ({ findCode, setPickReason }) => {
    const { unsuitableReasonInfo } = useSelector((state) => state.unsuitableReasonInfo);
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>부적합 상태</th>
                        <th>사유 코드</th>
                        <th>부적합 명</th>
                    </tr>
                    {unsuitableReasonInfo?.data?.length > 0 && findCode?.length === 0 &&
                        unsuitableReasonInfo.data.map((data, index) => {
                            return (
                                <UnsuitableCodeItem
                                    key={index}
                                    unsuitableReasonCode={data.unsuitableReasonCode}
                                    unsuitableReasonName={data.unsuitableReasonName}
                                    unsuitableStatusCode={data.unsuitableStatusCode}
                                    unsuitableStatusName={data.unsuitableStatusName}
                                    setPickReason={setPickReason}
                                />
                            )
                        })}
                    {findCode?.length > 0 &&
                        findCode.map((data, index) => {
                            return (
                                <UnsuitableCodeItem
                                    key={index}
                                    unsuitableReasonCode={data.unsuitableReasonCode}
                                    unsuitableReasonName={data.unsuitableReasonName}
                                    unsuitableStatusCode={data.unsuitableStatusCode}
                                    unsuitableStatusName={data.unsuitableStatusName}
                                    setPickReason={setPickReason}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UnsuitableCodeList;