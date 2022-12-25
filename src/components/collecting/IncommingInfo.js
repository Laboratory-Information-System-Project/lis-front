import React from 'react';
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import '../../styles/collecting.scss'
import {useEffect, useLayoutEffect} from "react";
import DefaultData from "../common/DefaultData/DefaultData";
import {useDispatch} from "react-redux";
import VisitActions from "../../redux/modules/Collecting/VisitActions";


const IncommingInfo = React.memo(function IncommingInfo({info, initVisitInfo, buttonForPrescribeInfo}){
    const dispatch = useDispatch();

    useEffect(() => {
        const ul = document.querySelectorAll(".visit-btn");
        for (let i = 0; i < ul.length; i++) {
            ul[i].addEventListener('click', () => {
                buttonForPrescribeInfo(ul[i]);
            });
        }
    },[info]);

    useEffect(() => {
        if(initVisitInfo === '') {
            dispatch(VisitActions.initVisitInfo());
        }
    }, [initVisitInfo]);


    return (
        <div className={'left-table patient-comming'}>
            <div className={"content-title"}>
                <AssignmentOutlinedIcon/>
                <h3>내원 정보</h3>
            </div>
            {info.empty === false ? <div className={"table visit-table"}>
                <ul className={"row first-li"}>
                    <li className={"fl table-title comming-table"}>진료과</li>
                    <li className={"fl table-title comming-table visit-dt"}>내원일자</li>
                    <li className={"fl table-title comming-table"}>진료의</li>
                    <li className={"fl table-title comming-table"}>상태</li>
                </ul>
                {
                    info.data.map((data, index) => {
                            // {/*FIXEME 아래는 스크롤 처리 */}
                            return (
                                <ul className={"row second-li visit-btn"}
                                    key={index} data-key={data?.VISIT_CODE}>
                                    <li className={"fl comming-table"}>{data?.DEPARTMENT_NAME}</li>
                                    <li className={"fl comming-table visit-dt"}>{data?.VISIT_DT}</li>
                                    <li className={"fl comming-table"}>{data?.USER_NAME}</li>
                                    <li className={"fl comming-table"}>{data?.VISIT_STATUS}</li>
                                </ul>
                            )
                        }
                    )
                }
            </div>: info.isInit ?
                <div className="default_position2">
                    <DefaultData division={'4'}/>
                </div>
                :
                <div className="default_position2">
                    <DefaultData division={'6'}/>
                </div>
            }
        </div>
    );
})

export default IncommingInfo;
