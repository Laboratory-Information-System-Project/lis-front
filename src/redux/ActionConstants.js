const UnsuitableType = {
    GET_SAMPLE: 'GET_SAMPLE',
    GET_SAMPLE_SUCCESS: 'GET_SAMPLE_SUCCESS',
    GET_SAMPLE_FAILURE: 'GET_SAMPLE_FAILURE',

    GET_SAMPLES: 'GET_SAMPLES',
    GET_SAMPLES_SUCCESS: 'GET_SAMPLES_SUCCESS',
    GET_SAMPLES_FAILURE: 'GET_SAMPLES_FAILURE',
}

const PrescribeType = {
    GET_PRESCRIBE: 'GET_PRESCRIBE',
    GET_PRESCRIBE_SUCCESS: 'GET_PRESCRIBE_SUCCESS',
    GET_PRESCRIBE_FAILURE: 'GET_PRESCRIBE_FAILURE',
    
    GET_PRESCRIBES: 'GET_PRESCRIBES',
    GET_PRESCRIBES_SUCCESS: 'GET_PRESCRIBES_SUCCESS',
    GET_PRESCRIBES_FAILURE: 'GET_PRESCRIBES_FAILURE',
}

const UserType = {
    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILURE: 'GET_USER_FAILURE',
    
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE: 'GET_USERS_FAILURE',

}


const Types = {
    ...UnsuitableType,
    ...PrescribeType,
    ...UserType
}

export default Types;