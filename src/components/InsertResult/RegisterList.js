import RegisterItem from "./RegisterItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Pagination from 'react-js-pagination'
import React, {useCallback, useEffect, useState} from "react";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import {useDispatch, useSelector} from "react-redux";

const RegisterList = ({onConclusion, MessageInfo}) => {

    const {RegisterInfo} = useSelector((state) => state.RegisterInfo);

    let item = 17;

    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const dispatch = useDispatch();

    const year = new Date().getFullYear();
    const month = new Date().getMonth()>9?new Date().getMonth()+1:'0'+new Date().getMonth()+1;
    const date = new Date().getDate()>9?new Date().getDate():'0'+new Date().getDate();
    const today = year + '-' + month + '-' + date;

    const [stDate, setStDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [barcode, setBarcode] = useState('');

    const changeStDate = useCallback(e => {
        if ("0000-00-00" <= e.target.value && e.target.value <= endDate) {
            setStDate(e.target.value);
        }
    }, [endDate]);

    const onChangeEndDate = useCallback(e => {
        if (stDate <= e.target.value && e.target.value<= new Date().toISOString().slice(0, 10)) {
            setEndDate(e.target.value);
        }
    }, [stDate]);

    const onChangeBarcode = (e) => {
        setBarcode(e.target.value);
    };

    useEffect(()=>{
        console.log("1111")
        dispatch(InsertResultAction.getSearchRegister(barcode,stDate,endDate));
    },[dispatch,barcode,stDate,endDate,MessageInfo]);

    useEffect(() => {
        setPage(1);
    },[RegisterInfo]);

    return (
        <div className="content">
            <div className="con_title">
                <ArticleOutlinedIcon/>
                <p>검체 리스트</p>
                <input className="startDate" type="date" value={stDate} onChange={changeStDate}/>
                <input className="endDate" type="date" value={endDate} onChange={onChangeEndDate}/>
                <input
                    className="input_text"
                    placeholder="검색어"
                    onChange={onChangeBarcode}
                    value={barcode}
                />
            </div>
            <div className="table_height">
                <table>
                    <tbody>
                    <tr className="table_title">
                        <th>검체번호</th>
                        <th>오더번호</th>
                        <th>결과유무</th>
                        <th>접수시간</th>
                    </tr>

                    {RegisterInfo?.data?.length > 0 && RegisterInfo.data.slice(
                        item * (page - 1),
                        item * (page - 1) + item
                    ).map((data, index) => {
                        return (
                            <RegisterItem
                                key={index}
                                data={data}
                                onConclusion={onConclusion}
                                MessageInfo={MessageInfo}
                            />
                        )
                    })}

                    </tbody>
                </table>
            </div>

            <div className="pagination_box">
                <Pagination
                    activePage={page}  // 현재 보고있는 페이지
                    itemsCountPerPage={item}  // 한페이지에 출력할 아이템수
                    totalItemsCount={RegisterInfo?.data?.length}  // 총 아이템수
                    pageRangeDisplayed={5}  // 표시할 페이지수
                    onChange={handlePageChange} >
                </Pagination>
            </div>
        </div>
    )
}


export default RegisterList;
