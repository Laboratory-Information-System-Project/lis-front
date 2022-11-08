import react, { useCallback, useState } from 'react';
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";  
import Modal from "../unsuitable/Modal";
import SelectUserModal from "../unsuitable/SelectUserModal";
import { userInfo } from '../../redux/modules';

const UnsuitableReasonLeft = () => {
    const [selectUser, setSelectUser] = useState(false);
    
    const [query, setQuery] = useState('');
    const [target, setTarget] = useState('');

    const onSubmit = async (query, target) => {
        // dispatch(UnsuitableActions.getSamples(query, target));
        // dispatch(UnsuitableActions.getPrescribes(query, target));
    }

    const onQueryChange = useCallback ((e) => {
        setQuery(e.target.value);
        console.log(query);
    }, [query]);

    const SearchButtonClick = useCallback (() => {
        onsubmit(query, target);
        setQuery('');
    }, [onSubmit, query, target]);

    return (
        <div className="unsuitable-wrap left">
                        <div className="header-wrap">
                            <div className="con-title">
                                <TextSnippetOutlinedIcon />
                                <p>부적합 사유</p>
                            </div>
                            <div>    
                                <span>김현민님</span>
                            </div>
                        </div>
                        <form>
                            <div className="select-reason">
                                <p>피통보자</p>
                                <input readOnly="readOnly"
                                    placeholder="피통보자 선택"
                                    onClick={() => setSelectUser(!selectUser)}
                                    onSubmit={onSubmit}
                                />
                                
                                <p>부적합 사유 선택</p>
                                <select name="category">
                                    <option value="barcord-get">채취</option>
                                    <option value="collection">채혈</option>                                
                                </select>
                                <select name="reason">
                                    <option value="reason1">피가 적음</option>
                                    <option value="reason2">몰라 ㅎ</option>
                                </select>
                            </div>
                            <div className="write-reason">
                                <textarea placeholder="부적합 사유를 상세하게 작성해주세요."
                                          onChange={onQueryChange}
                                          value={query}   
                                ></textarea>
                                <button 
                                    className="btn"
                                    onClick={SearchButtonClick}
                                >추가</button>
                            </div>
                        </form>

                        {selectUser && (
                                <Modal closeModal={() => setSelectUser(!selectUser)}>
                                    <SelectUserModal closeModal={() => setSelectUser(!selectUser)}/>
                                </Modal>)}

                    </div>
    )
}

export default UnsuitableReasonLeft;