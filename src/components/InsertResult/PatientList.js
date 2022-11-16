import PatientItem from "./PatientItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Pagination from 'react-js-pagination'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ChangeResultAction from "../../redux/modules/InsertResult/ChangeResultAction";

const PatientList = ({InsertResultInfo}) => {

    const [page, setPage] = useState(1);

    const {ChangeResultInfo} = useSelector((state) => state.ChangeResultInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ChangeResultAction.getResultList());
    },[]);

    const handlePageChange = (page) => {
        setPage(page);
    };

    let item = 10;

    return (
        <div className="frame second">
            <div className="con_title">
                <ArticleOutlinedIcon/>
                <p>검체 리스트</p>
            </div>
            <div className="table_max_size">
                <table>
                    <tbody>
                    <tr className="table_title">
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>날짜</th>
                        <th>등록</th>
                        <th>수정</th>
                    </tr>

                    {InsertResultInfo?.data?.length > 0 && InsertResultInfo.data.slice(
                        item * (page - 1),
                        item * (page - 1) + item
                    ).map((data, index) => {
                        return (
                            <PatientItem
                                key={index}
                                bnum={data.bnum}
                                btitle={data.btitle}
                                bwriter={data.bwriter}
                                bdate={data.bdate}
                                bcontent={data.bcontent}
                                ChangeResultInfo={ChangeResultInfo}
                                page={page}
                            />
                        )
                    })}

                    {/*{InsertResultInfo?.data?.length > 0 && InsertResultInfo.data.map((data, index) => {*/}
                    {/*    return (*/}
                    {/*        <PatientItem*/}
                    {/*            key={index}*/}
                    {/*            bnum={data.bnum}*/}
                    {/*            btitle={data.btitle}*/}
                    {/*            bwriter={data.bwriter}*/}
                    {/*            bdate={data.bdate}*/}
                    {/*            bcontent={data.bcontent}*/}
                    {/*            ChangeResultInfo={ChangeResultInfo}*/}
                    {/*        />*/}
                    {/*    )*/}
                    {/*})}*/}

                    </tbody>
                </table>
            </div>
            <div className="pagination_box">
                <Pagination
                    activePage={page}  // 현재 보고있는 페이지
                    itemsCountPerPage={item}  // 한페이지에 출력할 아이템수
                    totalItemsCount={InsertResultInfo?.data?.length}  // 총 아이템수
                    pageRangeDisplayed={5}  // 표시할 페이지수
                    onChange={handlePageChange}> // 함수
                </Pagination>
            </div>
        </div>
    )
}


export default PatientList;
