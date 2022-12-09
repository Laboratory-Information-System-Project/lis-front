import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import UnsuitableActions from "../redux/modules/Unsuitable/UnsuitableActions";
import SearchBar from "../components/unsuitable/searchbar/SearchBar";
import SampleList from "../components/unsuitable/sample/SampleList";
import PrescribeList from "../components/unsuitable/perscribe/PrescribeList";
import UnsuitableReasonLeft from "../components/unsuitable/reasonleft/UnsuitableReasonLeft";
import UnsuitableReasonRight from "../components/unsuitable/reasonright/UnsuitableReasonRight";
import { DoNotDisturbAltOutlined } from "@mui/icons-material";
import '../styles/unsuitable/unsuitable.scss';
import DefaultData from "../components/unsuitable/defaultData/DefaultData";


const Unsuitable = () => {
    const { sampleInfo } = useSelector((state) => state.sampleInfo);
    const dispatch = useDispatch();

    const onSubmit = (text) => {
        if (text !== '') {
            dispatch(UnsuitableActions.getSamples(text));
            dispatch(UnsuitableActions.getPrescribes(text));
            // store 초기화
            dispatch(UnsuitableActions.getSample([{}]));
            dispatch(UnsuitableActions.getOneUser(''));
        }
    }

    useEffect(() => {
        dispatch(UnsuitableActions.getUnsuitableReason());
    }, [dispatch]);

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <DoNotDisturbAltOutlined />
                    <h2>부적합 검체등록 <span>Unsuitable sample registration</span></h2>
                </div>
                <SearchBar onSubmit={onSubmit} />
                <div className="content1">
                    <div className="sample-wrap">
                        <div className="con-title">
                            <BloodtypeOutlinedIcon />
                            <p>검체정보</p>
                        </div>
                        <div className="sample-table">
                            {sampleInfo?.data?.length > 0 && sampleInfo.data[0].barcode ?
                                <SampleList /> : 
                                <div className="default_position"><DefaultData division="5" /></div>
                            }
                        </div>
                    </div>
                    <div className="perscribe-wrap">
                        <div className="con-title">
                            <LocalHospitalOutlinedIcon />
                            <p>처방정보</p>
                        </div>
                        <div className="prescribe-table">
                            {sampleInfo?.data?.length > 0 && sampleInfo.data[0].barcode ?
                                <PrescribeList /> :
                                <div className="default_position"><DefaultData division="5" /></div>
                            }
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <UnsuitableReasonLeft />
                    <UnsuitableReasonRight />
                </div>
            </div>
        </div>
    )
}

export default Unsuitable;