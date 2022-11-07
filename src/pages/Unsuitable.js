import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import React, { useState } from "react";
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import UnsuitableActions from "../redux/modules/Unsuitable/UnsuitableActions";
import SearchBar from "../components/unsuitable/SearchBar";
import { useSelector, useDispatch } from "react-redux";

import '../styles/unsuitable.scss';
import Modal from "../components/unsuitable/Modal";
import SelectUserModal from "../components/unsuitable/SelectUserModal";
import ReasonUpdateModal from "../components/unsuitable/ReasonUpdateModal";


const Unsuitable = () => {
    const [selectUser, setSelectUser] = useState(false);
    const [reasonUpdate, setReasonUpdate] = useState(false);
    
    // 스토어에 있는 애들 꺼내오는 애
    const { unsuitableInfo } = useSelector((state) => state.unsuitableInfo);
    
    // 리듀서 뺴오는 애
    const dispatch = useDispatch();

    const onSubmit = async (query, target) => {
        dispatch(UnsuitableActions.getSamples(query, target));
    }

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>부적합 검체등록 <span>Unsuitable sample registration</span></h2>
                </div>
                <SearchBar onSubmit={onSubmit} />
                <div className="content1">

                    {/* 검체 정보 */}
                    <div className="sample-wrap">
                        <div className="con-title">
                            <BloodtypeOutlinedIcon />
                            <p>검체정보</p>
                        </div>
                        <table>
                            <tr>
                                <th>바코드</th>
                                <th>검체번호</th>
                                <th>검체이름</th>
                                <th>검사상태</th>
                                <th>채혈자</th>
                                <th>채취시간</th>
                                <th>채혈시간</th>
                            </tr>
                            <tr>
                                <td>101212000001</td>
                                <td>B001</td>
                                <td>Blood</td>
                                <td>S</td>
                                <td>OOO간호사</td>
                                <td>20121212</td>
                                <td>20121216</td>
                            </tr>
                        </table>
                    </div>

                    {/* 처방 정보 */}
                    <div className="perscribe-wrap">
                        <div className="con-title">
                            <LocalHospitalOutlinedIcon />
                            <p>처방정보</p>
                        </div>
                        <table>
                            <tr>
                                <th>상태</th>
                                <th>처방일자</th>
                                <th>진료과</th>
                                <th>입/외</th>
                                <th>처방코드</th>
                                <th>검체코드</th>
                                <th>용기명</th>
                                <th>분류</th>
                                <th>처방의</th>
                                <th>오더명</th>
                            </tr>
                            <tr>
                                <td>처방</td>
                                <td>20101212</td>
                                <td>NS</td>
                                <td>입원</td>
                                <td>LBXXXX</td>
                                <td>EDT</td>
                                <td>EDTA</td>
                                <td>LAH</td>
                                <td>D001</td>
                                <td>CBC</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="content2">

                    {/* 부적합 사유 1 */}
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
                                <input type="text"
                                    placeholder="피통보자 선택"
                                    onClick={() => setSelectUser(!selectUser)}
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
                                <textarea placeholder="부적합 사유를 상세하게 작성해주세요."></textarea>
                                <button className="btn">추가</button>
                            </div>
                        </form>
                    </div>

                    {/* 부적합 사유 2 */}
                    <div className="unsuitable-wrap right">
                        <div className="con-title">
                            <TextSnippetOutlinedIcon />
                            <p>부적합 사유</p>
                        </div>
                        <form>
                            <div className="selected-reason">
                                <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>부적합 사유 1 <DeleteForeverOutlinedIcon /></p> 
                                </div>
                                <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>부적합 사유 1 <DeleteForeverOutlinedIcon /></p> 
                                </div>
                                <div className="reason-item" >
                                    <p onClick={() => setReasonUpdate(!reasonUpdate)}>부적합 사유 1 <DeleteForeverOutlinedIcon /></p> 
                                </div>
                            </div>
                                <button className="btn">등록</button>
                        </form>
                        </div>
                </div>
            </div>

            {selectUser && (
                                <Modal closeModal={() => setSelectUser(!selectUser)}>
                                    <SelectUserModal closeModal={() => setSelectUser(!selectUser)} />
                                </Modal>)}
            {reasonUpdate && (
                                <Modal closeModal={() => setReasonUpdate(!reasonUpdate)}>
                                    <ReasonUpdateModal closeModal={() => setReasonUpdate(!reasonUpdate)} />
                                </Modal>)}
        </div>
        
    )
}

export default Unsuitable;