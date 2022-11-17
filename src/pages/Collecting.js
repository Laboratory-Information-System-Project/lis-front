import React, {useState} from 'react';
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import '../styles/collecting.scss'
import InsertPatientNo from "../components/collectingComponent/InsertPatientNo";
import PatientInfo from "../components/collectingComponent/PatientInfo";
import IncommingInfo from "../components/collectingComponent/IncommingInfo";
import PrescribeInfo from "../components/collectingComponent/prescribeInfo";
import {useDispatch, useSelector} from "react-redux";
import CollectingActions from "../redux/modules/Collecting/CollectingActions";

const Collecting = () => {

    const { patientInfo } = useSelector((state)=> state.PatientInfo);
    const dispatch = useDispatch();
    const [length, setLength] = useState(0);
    const buttonForPatientInfo = async (patientNo) => {
        dispatch(CollectingActions.getPatientData(patientNo));
        setLength(Object.keys(patientInfo.data).length);
    }

    console.log("Collecting.service");
    console.log(patientInfo.data)
    return (
        <div className={'collecting-wrap'}>
            <div className={'max-wrap'}>
                <div className={'title-wrap'}>

                    <ContentPasteSearchOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content first-line'}>
                    <InsertPatientNo buttonForPatientInfo={buttonForPatientInfo}/>
                    <PatientInfo
                        info={length > 0 ? patientInfo.data[0] : []}
                    />
                {/*    TODO 2 */}
                </div>
                <div className={'main-content second-line'}>
                    {/*IXME : classname */}
                    <IncommingInfo
                        info={length > 0 ? patientInfo.data : []}
                    />
                    <PrescribeInfo/>
                </div>

            </div>

        </div>
    )
}

export default Collecting;