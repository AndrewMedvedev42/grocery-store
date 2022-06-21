import { State } from './defaultState';

export default function rootReducer (state=State, action:any){
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {...state, basket:[...state.basket, action.payload.product_item]}
        case 'ADD_UNIQUE_ITEM_TO_BASKET':
            return {...state, basket:state.basket.map((item:any)=>item.product_code === action.payload.product_code ? {...item, amount: item.amount += action.payload.amount}:item)}
        case 'ADD_AMOUNT_TO_ITEM_IN_BASKET':
            return {...state, basket:state.basket.map((item:any)=>item.product_code === action.payload.product_code ? {...item, amount: item.amount += action.payload.amount}:item)}
        case 'DECREASE_AMOUNT_TO_ITEM_IN_BASKET':
            return {...state, basket:state.basket.map((item:any)=>item.product_code === action.payload.product_code ? {...item, amount: item.amount -= action.payload.amount}:item)}
        case 'DELETE_ITEM_FROM_BASKET':
            return {...state, basket:state.basket.filter((item)=>item.product_code != action.payload.product_code)}    
        default:
            return {...state}
    }
}