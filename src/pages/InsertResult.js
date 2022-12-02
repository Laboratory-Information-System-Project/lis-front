import React, {useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import InsertResultAction from "../redux/modules/InsertResult/InsertResultAction";
import RegisterList from "../components/InsertResult/RegisterList"
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import ConclusionList from "../components/InsertResult/ConclusionList";

const InsertResult = () => {
    const {ConclusionInfo} = useSelector((state) => state.ConclusionInfo);
    const {InspectionTypeInfo} = useSelector((state) => state.InspectionTypeInfo);
    const {MessageInfo} = useSelector((state) => state.MessageInfo);


    const [code,setCode] = useState('');
    const [register,setRegister] = useState('');
    const [render,setRender] = useState(true);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(11)
    //     dispatch(InsertResultAction.getTodayRegister());
    // },[dispatch]);

    const onConclusion = (barcode, registerCode) =>{
        dispatch(InsertResultAction.getSearchConclusion(barcode));
        dispatch(InsertResultAction.getSearchInspectionType(barcode));
        setCode(barcode);
        setRegister(registerCode);
    };

    const onRegister = ()=>{
        setRender(!render);
    }

    return (
        <div className="wrap">
            <div className="max-wrap1">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>검사결과 등록 <span>Registration of inspection results</span></h2>
                </div>
                <div className="content-wrap">
                    <div className="left-content-wrap">
                        <RegisterList onConclusion={onConclusion} render={render} MessageInfo={MessageInfo}/>
                    </div>
                    <div className="right-content-wrap">
                        <ConclusionList ConclusionInfo={ConclusionInfo} InspectionTypeInfo={InspectionTypeInfo} code={code} register={register} onRegister={onRegister} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertResult;