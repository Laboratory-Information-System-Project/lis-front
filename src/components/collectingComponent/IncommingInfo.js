import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import '../../styles/collecting.scss'
import {useEffect} from "react";
import DefaultData from "../result/DefaultData";


const IncommingInfo = ({info, buttonForPrescribeInfo}) => {

    useEffect(() => {

        const ul = document.querySelectorAll(".visit-btn");
        // const test = document.getElementsByClassName(".visit-btn");
        console.log('');
        console.log(info);

        for (let i = 0; i < ul.length; i++) {
            ul[i].addEventListener('click', () => {
                buttonForPrescribeInfo(ul[i].getAttribute('data-key'));
            });
        }

    },[info]);

    return (
            <div className={'left-table patient-comming'}>
                <div className={"content-title"}>
                    <AssignmentOutlinedIcon/>
                    <h3>내원 정보</h3>
                </div>
                <div className={"table visit-table"}>
                    {info.length > 0 && <ul className={"row first-li"}>
                        <li className={"fl table-title comming-table"}>진료과</li>
                        <li className={"fl table-title comming-table visit-dt"}>내원일자</li>
                        <li className={"fl table-title comming-table"}>진료의</li>
                        <li className={"fl table-title comming-table"}>상태</li>
                    </ul>}
                    {
                        info.length > 0 ? info.map((data, index) => {
                                // {/*FIXEME 아래는 스크롤 처리 */}
                                return (
                                    <ul className={"row second-li visit-btn"}
                                        key={index} data-key={data?.visitCode}>
                                        <li className={"fl comming-table"}>{data?.departmentName}</li>
                                        <li className={"fl comming-table visit-dt"}>{data?.visitDt}</li>
                                        <li className={"fl comming-table"}>{data?.userName}</li>
                                        <li className={"fl comming-table"}>{data?.visitStatus}</li>
                                    </ul>
                                )
                            }
                        ) : <DefaultData/>
                    }
                </div>
            </div>
    );
}

export default IncommingInfo;