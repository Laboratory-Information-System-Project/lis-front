import PatientItem from "./PatientItem";
import "../../styles/insertResult.scss";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const PatientList = ({ InsertResultInfo }) => {
    return (
        <div className="frame">
            <div className="con_title">
                <ArticleOutlinedIcon/>
                <p>검체 리스트</p>
            </div>
        <table>
            <tbody>
            <tr className="table_title">
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>등록</th>
                <th>수정</th>
            </tr>

            {InsertResultInfo?.data?.length>0 && InsertResultInfo.data.map((data, index) => {

                return(
                    <PatientItem
                        key={index}
                        bnum={data.bnum}
                        btitle={data.btitle}
                        bwriter={data.bwriter}
                        bcontent={data.bcontent}
                    />
                )
            })}

            </tbody>
        </table>
            <div className="pagenation">페이지네이션</div>
        </div>
    )
}

export default PatientList;