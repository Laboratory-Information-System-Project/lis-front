import React, { useEffect, useState, useCallback } from 'react';
import '../../../styles/unsuitable_reason_update.scss';
import '../../../styles/modal.scss';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import { useDispatch, useSelector } from 'react-redux';
import UnsuitableActions from '../../../redux/modules/Unsuitable/UnsuitableActions';

function ReasonUpdate({
    setReasonUpdate,
    reasonUpdate,
    sampleBarcode,
    category,
    employeeAuthority,
    employeeName,
    detail,
    reason,
    key2,
}) {
    console.log(reason);

    const dispatch = useDispatch();

    const [updateDetail, setUpdateDetail] = useState('');
    const [flag, setFlag] = useState(false);

    function closeModal() {
        setReasonUpdate(!reasonUpdate);
    }

    const onUpdateDetail = useCallback(
        (e) => {
            setUpdateDetail(e.target.value);
        },
        [updateDetail]
    );

    console.log(updateDetail);

    // test
    const { unsuitableSampleInfo } = useSelector(
        (state) => state.unsuitableSampleInfo
    );

    const [initSample, setInitSample] = useState([]);
    const [sampleDetail, setSampleDetail] = useState([]);

    // store 초기화

    const submitUpdate = (e) => {
        e.preventDefault();
        // 해당 index 제외, 저장 ( 삭제 기능 )
        // initSample.map((item, key) => {

        //  if(key != key2 && flag === false){
        //       setSampleDetail(initSample => [...initSample, item]);
        //     }
        // })

        setFlag(true);
    };

    // useEffect(() => {
    //     unsuitableSampleInfo.data.map((item, key) => {
    //              setInitSample(initSample => [...initSample, item]);
    //        })
    // }, []);

    const close = () => {
        if (flag) {
            dispatch(UnsuitableActions.getSample(sampleDetail));
            setFlag(false);
        }
        closeModal();
    };

    return (
        <div className="reason">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 사유</h2>
            </div>
            <div className="text">
                <p>{reason}</p>
            </div>
            <div className="content">
                <textarea
                    placeholder="부적합 사유를 상세하게 작성해주세요."
                    defaultValue={detail}
                    onChange={onUpdateDetail}
                ></textarea>
            </div>
            <div className="footer">
                <button className="btn" onClick={submitUpdate}>
                    삭제
                </button>
                <button className="btn" onClick={close}>
                    닫기
                </button>
            </div>
        </div>
    );
}

export default ReasonUpdate;
