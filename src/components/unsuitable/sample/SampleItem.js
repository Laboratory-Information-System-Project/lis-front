import React from "react";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import Swal from 'sweetalert2';

const SampleItem = ({
    barcode,
    statusName,
    barcodeDt,
    collectingDt,
    vesselCode,
    name,
    collectorId,
    prescribeCode,
    collectorUserId,
    authority,
    userId
}) => {
    const dispatch = useDispatch();

    let pickUser = { userId, name, authority };

    const barcodePrintUser = () => {
        Swal.fire({
            icon: "question",
            title: `${pickUser.name}`,
            text: `피통보자로 등록하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: "등록",
            cancelButtonText: "취소",
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(UnsuitableActions.getOneUser(pickUser));
                Swal.fire('등록이 완료되었습니다.', 'success');
            }
            else {
            }
        });
    }

    const collectorUser = () => {
        Swal.fire({
            icon: "question",
            title: `${pickUser.name}`,
            text: `피통보자로 등록하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: "등록",
            cancelButtonText: "취소",
        }).then((res) => {
            if (res.isConfirmed) {
                let userId;
                userId = collectorUserId;
                pickUser = { userId, name, authority }
                dispatch(UnsuitableActions.getOneUser(pickUser));
                Swal.fire('등록이 완료되었습니다.', 'success');
            }
            else {
            }
        });
    }


    return (
        <>
            <tr>
                <td>{barcode}</td>
                <td>{statusName}</td>
                <td>{barcodeDt}</td>
                {!collectingDt ?
                    <td>-</td> :
                    <td>{collectingDt}</td>
                }
                <td>{vesselCode}</td>
                <td onClick={barcodePrintUser}>{name}</td>
                {!collectorId ?
                    <td>-</td> :
                    <td onClick={collectorUser}>{collectorId}</td>
                }
                <td>{prescribeCode}</td>
            </tr>
        </>
    )
}

export default SampleItem;