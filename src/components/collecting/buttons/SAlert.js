import Swal from "sweetalert2";

export const SAlertWithTime = (text, smText) => {
    let timerInterval;
    Swal.fire({
        title: text,
        html: smText,
        timer: 3000,
        timerProgressBar: false,
        // didOpen: () => {
        //     Swal.showLoading();
        //     const b = Swal.getHtmlContainer().querySelector('b')
        //     timerInterval = setInterval(() => {
        //
        //     }, 100)
        // },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
}

export const SAlert = (text, smText, icon) => {
    Swal.fire(
        text,
        smText,
        icon
    )
}

export const SAlertWithBarcode = (barcode) => {
    let timerInterval;
    Swal.fire({
            imageUrl: barcode,
            imageHeight: 200,
            imageAlt: 'barcode',
            timer: 6000,
            timerProgressBar: false,
            didOpen: () => {
                // Swal.showLoading();
                // const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    // b.textContent = Swal.getTimerLeft()
                }, 6000)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }
    )
}

export const ConfirmAlert = () => {
    return Swal.fire({
        title: '취소 하시겠습니까?',
        icon: 'question',

        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
        cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
        confirmButtonText: '승인', // confirm 버튼 텍스트 지정
        cancelButtonText: '취소', // cancel 버튼 텍스트 지정

        reverseButtons: true, // 버튼 순서 거꾸로

    });
}