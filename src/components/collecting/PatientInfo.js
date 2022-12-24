import React, {useEffect} from 'react'
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import VisitActions from "../../redux/modules/Collecting/VisitActions";
import {useDispatch} from "react-redux";
import DefaultData from "../common/DefaultData/DefaultData"



const PatientInfo = ({info, visitStatus}) => {
    const dispatch = useDispatch();
    const buttonForVisitInfo = (line) => {

        let lineList = document.querySelectorAll('.patient-btn');
        let visitLineList = document.querySelectorAll('.visit-btn');

        for (let i = 0; i < visitLineList.length; i++) {
            visitLineList[i].classList.remove("selected");
        }

        for (let i = 0; i < lineList.length; i++) {
            lineList[i].classList.remove("selected");


            if (line.getAttribute('data-key') === lineList[i].getAttribute('data-key')) {
                lineList[i].classList.add('selected');
                dispatch(VisitActions.getVisitData(lineList[i].getAttribute('data-key'), visitStatus.current));
            }
        }
    }
    console.log("info")
    console.log(info)
    console.log(info)
    console.log(info)
    console.log(info)
    useEffect(() => {
        const ul = document.querySelectorAll(".patient-btn");
        for (let i = 0; i < ul.length; i++) {
            ul[i].addEventListener('click', () => {
                buttonForVisitInfo(ul[i]);
            });
        }
    }, [info]);


    return (
        <div className={'patient-rows'}>
            <div className={'content-title'}>
                <SickOutlinedIcon/><h3>환자 정보</h3>
            </div>
            {info?.data?.length > 0 ?
                <div className={'table patient-info'}>
                    <ul className={'row patient-table'}>
                        <li className={'fl patient-title'}>환자번호</li>
                        <li className={'fl patient-title'}>이름</li>
                        <li className={'fl patient-title'}>나이</li>
                        <li className={'fl patient-title'}>성별</li>
                        <li className={'fl patient-title regi-no'}>주민번호</li>
                        <li className={'fl patient-title'}>키</li>
                        <li className={'fl patient-title'}>몸무게</li>
                        <li className={'fl patient-title'}>혈액형</li>
                        <li className={'fl patient-title memo'}>특이사항</li>
                    </ul>
                    {info.data.map((data, index) => {
                        return (
                            <ul className={'patient-table patient-btn'} key={index} data-key={data.PATIENT_NO}>
                                <li className={'fl patient-data'}>{data.PATIENT_NO}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_NAME}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_AGE}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_GENDER}</li>
                                <li className={'fl patient-data regi-no'}>{data.PATIENT_RESIDENT_NUMBER}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_HEIGHT}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_WEIGHT}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_BLOOD_TYPE}</li>
                                <li className={'fl patient-data memo'}>{data.PATIENT_MEMO}</li>
                            </ul>)
                    })
                    }
                </div>
                :
                    <div className="default_position1">
                        <DefaultData division={'4'} />
                    </div>
                }
        </div>


    )
}
export default PatientInfo;