import RegisterItem from "./RegisterItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Pagination from 'react-js-pagination'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";

const RegisterList = ({RegisterInfo}) => {

    const [page, setPage] = useState(1);

    const {ConclusionInfo} = useSelector((state) => state.ConclusionInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InsertResultAction.getAllConclusion());
    },[]);

    const handlePageChange = (page) => {
        setPage(page);
    };

    useEffect(() => {
        setPage(1);
    },[RegisterInfo]);

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
                        <th>바코드</th>
                        <th>검사자코드</th>
                        <th>검사상태코드</th>
                        <th>접수시간</th>
                        <th>등록</th>
                        <th>수정</th>
                    </tr>

                    {RegisterInfo?.data?.length > 0 && RegisterInfo.data.slice(
                        item * (page - 1),
                        item * (page - 1) + item
                    ).map((data, index) => {
                        return (
                            <RegisterItem
                                key={index}
                                registerCode={data.registerCode}
                                statusCode={data.statusCode}
                                registerDt={data.registerDt}
                                barcode={data.barcode}
                                inspectorId={data.inspectorId}
                                ConclusionInfo={ConclusionInfo}
                                page={page}
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
                    onChange={handlePageChange}> // 함수
                </Pagination>
            </div>
        </div>
    )
}


export default RegisterList;
