import React, {useState, useCallback, useEffect} from "react";
import '../../styles/resultCheck/modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import ResultActions from "../../redux/modules/Result/ResultActions";

const ResultModal = (props) => {
    
    const { resultInfo } = useSelector((state) => state.ResultInfo);
    const dispatch = useDispatch();

    console.log(resultInfo);
    console.log("위에임")

 
    const [text, setText] = useState('');
    const [target, setTarget] = useState('');
    // console.log(query);

    const onQueryChange = (e) => {
        setText(e.currentTarget.value);
    }
       
    const onClickHandler = () => {
        props.propFunction(text)
    }

    const { open, close } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <div className="modal-wrap">
                    <header>모달임</header>
                    <span>부적합 사유이름</span>
                    <div className="in-content">
                        {text}
                    </div>
                    <footer>
                        <button onClick={close}>닫기</button>
                        <button onClick={onClickHandler}>보내</button>
                    </footer>
                </div>
            ) : null}

        </div>
    )
}

export default ResultModal;