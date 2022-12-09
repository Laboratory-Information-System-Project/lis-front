import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { useSelector } from "react-redux";
import '../../../styles/unsuitable/unsuitableReasonPicker.scss'
import UnsuitableCodeList from "../reasonleft/UnsuitableCodeList";
import { ToastContainer, toast } from 'react-toastify';
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

function ReasonPickerModal({ closeModal, setReason }) {
    const { unsuitableReasonInfo } = useSelector((state) => state.unsuitableReasonInfo);

    const [query, setQuery] = useState('');
    const [findCode, setFindCode] = useState([]);
    const [pickReason, setPickReason] = useState();

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value.replace(/[^A-Za-z]/g, '').toUpperCase());
    }, [setQuery]);

    const onSubmitQuery = () => {
        setQuery('');
    }

    useEffect(() => {
        setFindCode(unsuitableReasonInfo.data.filter(item => item.unsuitableReasonCode.includes(query)));
    }, [query, unsuitableReasonInfo.data])

    const commitReason = () => {
        if (pickReason) {
            setReason(pickReason);
            closeModal();
        } else {
            toast.error("사유를 선택해주세요.", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }
    }

    return (
        <div className="select-user">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 사유 선택</h2>
            </div>
            <div className="text">
                <p>부적합 사유를 선택해주세요.</p>
            </div>
            <div className="input-reasonname">
                <input type="text"
                    placeholder="영어로 사유코드를 입력해주세요."
                    onChange={onQueryChange}
                    value={query}
                />
                <button id="btn"
                    onClick={onSubmitQuery}>초기화</button>
            </div>
            <div className="reason-content">
                {unsuitableReasonInfo?.data?.length > 0 &&
                    <UnsuitableCodeList findCode={findCode} setPickReason={setPickReason} />
                }
            </div>
            <div className="reason-footer">
                <button className="btn2" onClick={commitReason}>완료</button>
                <button className="btn2" onClick={closeModal}>닫기</button>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default ReasonPickerModal;
