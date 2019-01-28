import {
    GET_ORDERS, 
    ADD_ORDER, 
    DELETE_ORDER, 
    ORDER_LOADING,
    GET_ITEMS,
    DELETE_ITEM,
    ITEM_LOADING
} from '../actions/types';


const initialState ={
    orders: [],
    items:[],
    orderLoading : false,
    itemLoading : false
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload,
                orderLoading: false
            };
        case GET_ITEMS:
            return{
                ...state,
                items: action.payload,
                itemLoading: false
        };
        case DELETE_ORDER:
            return{
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload)
        };
        case DELETE_ITEM:
        return{
            ...state,
            items: state.items.filter(items => items.id !== action.payload)
        };
        case ADD_ORDER:
            return{
                ...state,
                orders: [action.payload, ...state.orders]
            };
        case ORDER_LOADING:
            return{
                ...state,
                orderLoading:true
            };
        case ITEM_LOADING:
            return{
                ...state,
                itemLoading:true
            };
        default:
            return state;
    }
}