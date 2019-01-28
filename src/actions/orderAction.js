import axios from 'axios';
import {
    GET_ORDERS,
    ADD_ORDER,
    DELETE_ORDER,
    ORDER_LOADING,
    GET_ITEMS,
    ITEM_LOADING
} from './types';

export const getOrders = () => dispatch =>{
   dispatch(setOrdersLoading);
   axios
    .get('http://localhost:8080/orderList')
    .then(res => 
        dispatch({
            type: GET_ORDERS,
            payload: res.data
        }));
};

export const getItems = (id) => dispatch =>{
    dispatch(setItemLoading);
    axios
     .get(`http://localhost:8080/orderList/${id}/menus`)
     .then(res => 
         dispatch({
             type: GET_ITEMS,
             payload: res.data
         }));
 };

export const deleteOrder = (id) => dispatch =>{
    axios
        .delete(`http://localhost:8080/orderList/${id}`)
        .then(res => dispatch({
            type:DELETE_ORDER,
            payload: id
        }))
};

export const addOrder = (order) => dispatch => {
    axios
        .post('http://localhost:8080/orderList',order)
        .then(res => 
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            }))
};

export const setOrdersLoading = () => {
    return{
        type: ORDER_LOADING
    }
}

export const setItemLoading = () => {
    return{
        type: ITEM_LOADING
    }
}