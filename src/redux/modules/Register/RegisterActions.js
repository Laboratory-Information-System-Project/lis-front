import Types from "../../ActionConstants";
import * as RegisterApi from "../../../api/RegisterApi";
import Swal from "sweetalert2";
const RegisterActions ={

    getDateSearch: (barcode) => async (dispatch) => {

        dispatch({ type: Types.GET_SEARCH_RESULT_PATIENT });

        try {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            const register = await RegisterApi.getPrescribe(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`);

            if (register.data.length === 0){
                Toast.fire({
                    icon: 'error',
                    title: '접수가 불가능한 바코드 입니다.',
                    text:'바코드 정보가 다릅니다.'
                });
            }
            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });
            Toast.fire({
                icon: 'warning',
                title: '바코드를 확인해주세요',
                text:'바코드 정보가 다릅니다.'
            });
            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_FAILURE,
                payload: error.toString()
            })
        }
    },
    getDateSearchd: (barcode) => async (dispatch) => {

        dispatch({ type: Types.GET_SEARCH_RESULT_COLLET });

        try {
            const register = await RegisterApi.getCollect(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`); 


            dispatch({
                type: Types.GET_SEARCH_RESULT_COLLET_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULT_COLLET_FAILURE,
                payload: error.toString()
            })
        }
    }

}
export default RegisterActions;