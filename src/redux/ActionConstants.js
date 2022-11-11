import {RealInsertInfo} from "./modules";

const InsertResultType ={
    GET_INSERTRESULTS: 'GET_INSERTRESULTS',
    GET_INSERTRESULTS_SUCCESS: 'GET_INSERTRESULTS_SUCCESS',
    GET_INSERTRESULTS_FAILURE: 'GET_INSERTRESULTS_FAILURE'
}

const RealInsertType ={
    GET_REALINSERT: 'GET_REALINSERT',
    GET_REALINSERT_SUCCESS: 'GET_REALINSERT_SUCCESS',
    GET_REALINSERT_FAILURE: 'GET_REALINSERT_FAILURE'
}

const Types = {
    ...InsertResultType,
    ...RealInsertType
}

export default Types;