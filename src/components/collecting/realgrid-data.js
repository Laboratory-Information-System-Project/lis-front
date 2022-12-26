import {ValueType} from "realgrid";

export const fields = [
    {
        fieldName: 'order_code',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: "Bool",
        dataType: ValueType.BOOLEAN,
    },
    {
        fieldName: 'visit_status',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: 'prescribe_dt',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'user_name',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'department_name',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'status_name',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'prescribe_code',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'sample_code',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'vessel_code',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'classification_code',
        dataType: ValueType.TEXT
    }];

export const columns = [
    {
        name: "Bool",
        fieldName: "Bool",
        width: "25",
        editable: false,
        renderer: {
            type: "check"
        },
        header: {
            text: " "
        }
    },
    {
        name: "prescribe_code",
        fieldName: "prescribe_code",
        type: "data",
        width: "58",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "처방코드",
        }
    },
    {
        name: "status_name",
        fieldName: "status_name",
        type: "data",
        width: "90",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "상태"
        },
    },
    {
        name: "prescribe_dt",
        fieldName: "prescribe_dt",
        type: "data",
        width: "103",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "처방날짜",
        }
    },
    {
        name: "user_name",
        fieldName: "user_name",
        type: "data",
        width: "50",
        editable: false,
        styles: {
            "textAlignment": "center"
        },
        header: "처방의사"
    }, {
        name: "order_code",
        fieldName: "order_code",
        type: "data",
        width: "80",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "오더코드"
        },
        renderer: {
            type: "text",
        }
    },
    {
        name: "department_name",
        fieldName: "department_name",
        type: "data",
        width: "65",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "진료과"
        },
    }, {
        name: "sample_code",
        fieldName: "sample_code",
        type: "data",
        width: "60",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "검체코드",
        },
    },
    {
        name: "vessel_code",
        fieldName: "vessel_code",
        type: "data",
        width: "55",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "용기코드"
        },
    }, {
        name: "classification_code",
        fieldName: "classification_code",
        type: "data",
        width: "40",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "분류"
        },
    },
]