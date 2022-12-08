import Swal from "sweetalert2";

export const SAlert = (text, smText, icon) =>{
    Swal.fire(
        text,
        smText,
        icon
    )
}

export const SAlertWithBarcode = (barcode, text, icon) => {
    Swal.fire({
        imageUrl: barcode,
        imageHeight: 200,
        imageAlt: 'test'
    },
        text,
        '',
        icon
    )
}