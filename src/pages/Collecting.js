import React, {useState} from 'react';
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import '../styles/collecting.scss'
import InsertPatientNo from "../components/collectingComponent/InsertPatientNo";
import PatientInfo from "../components/collectingComponent/PatientInfo";
import IncommingInfo from "../components/collectingComponent/IncommingInfo";
import PrescribeInfo from "../components/collectingComponent/prescribeInfo";

const Collecting = () => {

    return (
        <div className={'collecting-wrap'}>

            <div className={'max-wrap'}>
                <div className={'title-wrap'}>
                    <ContentPasteSearchOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content first-line'}>
                    <InsertPatientNo/>
                    <PatientInfo/>
                </div>
                <div className={'main-content second-line'}>
                    {/*IXME : classname */}
                    <IncommingInfo/>
                    <PrescribeInfo/>
                </div>

            </div>

        </div>
    )
}

export default Collecting;