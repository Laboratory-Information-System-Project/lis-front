import React, {useEffect, useRef, useState} from 'react';
import '../styles/collecting.scss'
import InsertPatientNo from "../components/collecting/InsertPatientNo";
import PatientInfo from "../components/collecting/PatientInfo";
import IncommingInfo from "../components/collecting/IncommingInfo";
import PrescribeInfo from "../components/collecting/prescribeInfo";
import {useDispatch, useSelector} from "react-redux";
import PatientActions from "../redux/modules/Collecting/PatientActions";
import PrescribeActions from "../redux/modules/Collecting/PrescribeActions";
import InitialData from "../redux/modules/Collecting/InitialData";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ReprintModal from "../components/collecting/modal/ReprintModal";
import {useParams} from "react-router-dom";
import VisitActions from "../redux/modules/Collecting/VisitActions";

const Collecting = () => {
    const {barcodeInfo} = useSelector(state => state.BarcodeInfo);
    const { patientInfo } = useSelector((state)=> state.PatientInfo);
    const { prescribeInfo } = useSelector((state)=> state.PrescribeInfo);
    const { visitInfo } = useSelector((state)=> state.Visit);
    const { collectingInfo } = useSelector((state)=> state.CollectingInfo);
    const [modal, setModal] = useState(false);
    const [prescribeData, setPrescribeData] = useState(false);
    // const [visitStatus, setVisitStatus] = useState('전체');
    const visitStatus = useRef('전체');
    const [visitNo, setVisitNo] = useState(0);
    const [prescribeInfoData, setPrescribeInfoData] = useState(prescribeInfo);

    const dispatch = useDispatch();
    const [patientLength, setPatientLength] = useState(0);
    const [prescribeLength, setPrescribeLength] = useState(0);

    const {num} = useParams();

    useEffect(() => {
        setPrescribeData(false);
    }, [visitInfo]);


    console.log("barcodeInfo");
    console.log(prescribeInfoData);


    const buttonForPatientInfo = async (patientInfo, searchCon) => {

        console.log('buttonForPatientInfo');
        console.log(patientInfo);

        await dispatch(PatientActions.getPatientData(patientInfo, searchCon));

        setPatientLength(Object.keys(patientInfo).length);

        visitInfo.empty = true;
        setPrescribeData(false);
    }

    const buttonForPrescribeInfo = async (line) =>{
        let lineList = document.querySelectorAll('.visit-btn');

        for (let i = 0; i < lineList.length; i++) {
            lineList[i].classList.remove("selected");
            if (line.getAttribute('data-key') === lineList[i].getAttribute('data-key')) {
                lineList[i].classList.add('selected');
                console.log("lineList[i].getAttribute('data-key')");
                console.log(lineList[i].getAttribute('data-key'));
                await dispatch(PrescribeActions.getPrescribeData(lineList[i].getAttribute('data-key'), visitStatus));
            }
        }

        setPrescribeLength(Object.keys(prescribeInfo.data).length);
        setPrescribeData(true);
        setVisitNo(visitNo);
    }

    const changeStatus = async () =>{
        await dispatch(PrescribeActions.getPrescribeData(visitNo));
    }

    const initPrescribeCodeInfo = () =>{
        PrescribeInfo = InitialData;
    }

    console.log(collectingInfo);

    return (
        <div className={'collecting-wrap'}>
            {num}
            <div className={'collecting-max-wrap'}>
                <div className={'title-wrap'}>
                    <ArticleOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content up'}>
                    <div className={'input-name'}>
                    <InsertPatientNo
                        buttonForPatientInfo={buttonForPatientInfo}
                        visitStatus={visitStatus}
                    />
                    </div>
                    <div className={'right-content'}>
                <PatientInfo
                    info={patientLength > 0 ? patientInfo.data : []}
                    visitStatus={visitStatus}
                />
                    </div>
                </div>
                <div className={'main-content down'}>
                    <div className={'left-content'}>
                    <IncommingInfo
                        // info={ visitInfo.data ? visitInfo.data : []}
                        info={ visitInfo.data ? visitInfo : []}
                        buttonForPrescribeInfo={buttonForPrescribeInfo}
                     />
                    </div>
                    <div className={'right-content prescribe'}>
                        {<PrescribeInfo
                            prescribeInfo={prescribeLength > 0 ? prescribeInfo.data : []}
                            isInit={prescribeInfo.isInit}
                            initPrescribeCodeInfo={initPrescribeCodeInfo}
                            setModal={setModal}
                            prescribeData={prescribeData}
                            changeStatus={visitNo}
                            setPrescribeInfoData={setPrescribeInfoData}
                            prescribeInfoData={prescribeInfoData}
                            barcodeInfo={barcodeInfo}
                            collectingInfo={collectingInfo}
                        />}
                    </div>
                </div>
                {modal? <ReprintModal barcode={barcodeInfo.data} setModal={setModal}/>: ''}
            </div>

        </div>
    )
}

export default Collecting;