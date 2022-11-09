import React, {useState, useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../styles/unsuitable_select_user.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import UnsuitableUserList from "../reasonleft/UnsuitableUserList";

function SelectUser(props) {

    const { userInfo } = useSelector((state) => state.userInfo);
    // const { oneUserInfo } = useSelector((state) => state.oneUserInfo);

    const [query, setQuery] = useState('');
    const [target, setTarget] = useState('');

    //
    const [getUserName, setGetUserName] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async (query, target) => {
        dispatch(UnsuitableActions.getUsers(query, target));
    }

    // 검색값 초기화?
    useEffect(() => {
        dispatch(UnsuitableActions.getUsers());
    }, [])

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [query]);


    function closeModal() {
        props.closeModal();
    }

    const SearchButtonClick = useCallback(() => {
        console.log(query)
        if (!query) {
            toast.error("이름을 입력해주세요!", {
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
        onSubmit(query, target);
        setTarget(query);
        setQuery('');
    }, [onSubmit, query, target]);


    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            if (!query) {
                toast.error("이름을 입력하세요.", {
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
            onSubmit(query, target);
            setTarget(query);
            setQuery('');
        }
    }, [onSubmit, query, target]);

    

    return (
        <div className="user">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>피통보자 검색</h2>
            </div>
            <div className="text">
                <p>찾으시려는 피통보자를 검색해주세요.</p>
            </div>
            <div className="input-name">
                <input type="text" 
                       placeholder="이름을 입력해주세요."
                       onChange={onQueryChange}
                       onKeyDown={EnterKeyPress}
                       value={query}
                />
                <button id="btn"
                        onClick={SearchButtonClick}>검색</button>
            </div>
            <div className="content">
                <UnsuitableUserList userInfo={userInfo} setGetUserName={setGetUserName} />
            </div>
            <div className="footer">
                <button className="btn2" onClick={()=> console.log(getUserName)}>완료</button>
                <button className="btn2" onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default SelectUser;