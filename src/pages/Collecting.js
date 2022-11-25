import React, {useState} from 'react';
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import '../styles/collecting.scss'
import InsertPatientNo from "../components/collectingComponent/InsertPatientNo";
import PatientInfo from "../components/collectingComponent/PatientInfo";
import IncommingInfo from "../components/collectingComponent/IncommingInfo";
import PrescribeInfo from "../components/collectingComponent/prescribeInfo";
import {useDispatch, useSelector} from "react-redux";
import CollectingActions from "../redux/modules/Collecting/CollectingActions";
import PrescribeActions from "../redux/modules/Collecting/PrescribeActions";
import BarcodeActions from "../redux/modules/Collecting/BarcodeActions";

const Collecting = () => {

    const { patientInfo } = useSelector((state)=> state.PatientInfo);
    const { prescribeInfo } = useSelector((state)=> state.PrescribeInfo);
    const { barcodeInfo } = useSelector((state)=> state.BarcodeInfo);

    const dispatch = useDispatch();
    const [patientLength, setPatientLength] = useState(0);
    const [prescribeLength, setPrescribeLength] = useState(0);

    const buttonForPatientInfo = async (patientNo) => {
        dispatch(CollectingActions.getPatientData(patientNo));
        setPatientLength(Object.keys(patientInfo.data).length);
    }
    const buttonForPrescribeInfo = async (visitNo) =>{
        await dispatch(PrescribeActions.getPrescribeData(visitNo));
        setPrescribeLength(Object.keys(prescribeInfo.data).length);
    }
    const createBarcode = async (prescribeCode)=> {
        await dispatch(BarcodeActions.postPrescribeData(prescribeCode));
        // const data = prescribeCode.getRows();
        let selectedData = {};
        // console.log(gridView !== '' ? dataProvider.getFieldValues('visit_status'): '');
        // for (let i = 0; i < data.length; i++) {
        //     if(data.Bool === true){
        //
        //     }
        // }

    }

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
                        info={patientLength > 0 ? patientInfo.data : []}
                    />
                {/*    TODO 2   */}
                </div>
                <div className={'main-content second-line'}>
                    {/*IXME : classname */}
                    <IncommingInfo
                        info={patientLength > 0 ? patientInfo.data : []}
                        buttonForPrescribeInfo={buttonForPrescribeInfo}
                    />
                    <PrescribeInfo
                     prescribeInfo={prescribeLength>0 ? prescribeInfo.data : []}
                     createBarcode={createBarcode}
                    />
                </div>

            </div>

        </div>
    )
}

export default Collecting;