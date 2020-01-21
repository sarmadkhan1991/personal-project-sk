import axios from 'axios';

const initialState = {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    cart: null,
    total: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export function requestUserData() {
    let data = axios.get('/api/user').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export function updateUserData (user) {
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            {let {id, email, firstName, lastName, cart, total} = action.payload;
            return {
                ...state,
                id: id,
                email: email,
                firstName: firstName,
                lastName: lastName,
                cart: cart,
                total: total
            };}
        case REQUEST_USER_DATA + '_REJECTED':
            return {
                id: null,
                email: null,
                firstName: null,
                lastName: null,
                cart: null,
                total: null
            };
        case UPDATE_USER_DATA:
            {
                const {id, email, firstName, lastName, cart, total} = action.payload;
                return {
                    id: id,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    cart: cart,
                    total: total
                };
            }
        default:
            return state;
    }
}

