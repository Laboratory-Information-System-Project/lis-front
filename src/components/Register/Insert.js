import styled from '@emotion/styled';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GATEWAY_URL } from '../../utils/constants/Config';
import Swal from 'sweetalert2';

const Insert = () => {
    const barcode = useSelector((state) => state.Listinfoplus.Listinfoplus.data);
    

    const inspector_id = localStorage.getItem('userId');
    const testFuc = () => {
        Swal.fire({
            title: '접수를 진행 하시겠습니까?',
            text: '접수 버튼을 누르면 접수가 진행 됩니다.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3C9DF6',
            cancelButtonColor: '#d33',
            confirmButtonText: '접수',
            cancelButtonText: '취소',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '접수가 완료 되었습니다.',
                    icon: 'success'
                })
                
                if(barcode.length >= 0){
                    
                    axios.post(`${GATEWAY_URL}/inspection-service/insert`,{
                        barcode: barcode[0].barcode,
                        inspectorId: inspector_id,
                        headers: { authorization: axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("AccessToken")}` }
                    })
                    .then((res)=>{
                    })
                    .catch();
                }
            }
        });
    };
    return (
        <InsertButton className="insert" onClick={testFuc}>
            접수하기
        </InsertButton>
    );
};
export default Insert;

const InsertButton = styled.button`
    border: 1px solid #3c9df6;
    background: #fff;
    border-radius: 5px;
    color: #3c9df6;
    font-weight: bold;
    padding: 3px 13px 3px 13px;
    margin-left: 1em;
    cursor: pointer;
    &:hover {
        background: #3c9df6;
        color: #fff;
        transition: 0.5s;
        font-weight: bold;
    }
    &:active {
        background: #217bce;
        border: 1px solid #217bce;
        transition: 0.5s;
    }
`;
