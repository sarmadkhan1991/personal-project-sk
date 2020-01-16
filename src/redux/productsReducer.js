import axios from 'axios';

const initialState = {
    products: null
}

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

export function requestProducts () {
    let data = axios.get('/api/products').then(res => res.data);
    return {
        type: REQUEST_PRODUCTS,
        payload: data
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS + 'FULLFILLED':
            const { products } = action.payload
            return {
                ...state, 
                products: products
            }
        default: 
            return state;
    }
}