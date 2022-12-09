import React, {useRef, useState} from 'react';
import '../styles/collecting.scss'
import InsertPatientNo from "../components/collectingComponent/InsertPatientNo";
import PatientInfo from "../components/collectingComponent/PatientInfo";
import IncommingInfo from "../components/collectingComponent/IncommingInfo";
import PrescribeInfo from "../components/collectingComponent/prescribeInfo";
import {useDispatch, useSelector} from "react-redux";
import PatientActions from "../redux/modules/Collecting/PatientActions";
import PrescribeActions from "../redux/modules/Collecting/PrescribeActions";
import InitialData from "../redux/modules/Collecting/InitialData";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ReprintModal from "../components/collectingComponent/modal/ReprintModal";
import {useParams} from "react-router-dom";
import VisitActions from "../redux/modules/Collecting/VisitActions";

const Collecting = ({match}) => {
    const {barcode} = useSelector(state => state.BarcodeInfo);
    const { patientInfo } = useSelector((state)=> state.PatientInfo);
    const { prescribeInfo } = useSelector((state)=> state.PrescribeInfo);
    const { visitInfo } = useSelector((state)=> state.Visit);
    const [visitNo, setVisitNo] = useState(0);
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const [patientLength, setPatientLength] = useState(0);
    const [prescribeLength, setPrescribeLength] = useState(0);
    const [visitInfoLength, setVisitInfoLength ] = useState(0);
    const flag = useRef(false);

    const {num} = useParams();

    const buttonForPatientInfo = async (patientInfo, visitStatus, searchCon) => {

        await dispatch(PatientActions.getPatientData(patientInfo, visitStatus, searchCon));

        setPatientLength(Object.keys(patientInfo).length);

        flag.current = true;
    }

    const buttonForVisitInfo = async (patientNo, event)=> {
        await dispatch(VisitActions.getVisitData(patientNo));
        console.log('visitInfo');
        console.log(visitInfo);
        event.stopPropagation();
    }

    const buttonForPrescribeInfo = async (visitNo,event) =>{
        await dispatch(PrescribeActions.getPrescribeData(visitNo));
        setPrescribeLength(Object.keys(prescribeInfo.data).length);
        setVisitNo(visitNo);
        event.stopPropagation();
    }

    const initPrescribeCodeInfo = () =>{
        PrescribeInfo = InitialData;
    }


    return (
        <div className={'collecting-wrap'}>
            {num}
            <div className={'max-wrap'}>
                <div className={'title-wrap'}>
                    <ArticleOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content up'}>
                    <div className={'input-name'}>
                    <InsertPatientNo buttonForPatientInfo={buttonForPatientInfo}/>
                    </div>
                    <div className={'right-content'}>
                <PatientInfo
                    info={patientLength > 0 ? patientInfo.data : []}
                    buttonForVisitInfo={buttonForVisitInfo}
                />
                    </div>
                </div>
                <div className={'main-content down'}>
                    <div className={'left-content'}>
                    <IncommingInfo
                        info={ visitInfo.data.length ? visitInfo.data : []}
                        buttonForPrescribeInfo={buttonForPrescribeInfo}
                     />
                    </div>
                    <div className={'right-content prescribe'}>
                    <PrescribeInfo
                     prescribeInfo={prescribeLength>0 ? prescribeInfo.data : []}
                     visitNo={visitNo}
                     initPrescribeCodeInfo = {initPrescribeCodeInfo}
                     setModal={setModal}
                    />
                    </div>
                </div>
                {modal?<ReprintModal barcode={barcode.data} setModal={setModal}/>: ''}
            </div>

        </div>
    )
}

export default Collecting;