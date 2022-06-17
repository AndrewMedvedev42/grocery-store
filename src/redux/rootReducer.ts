import { State } from './defaultState';

export default function rootReducer (state=State, action:any){
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {...state, basket:[...state.basket, action.payload.product_item]}
        case 'UPDATE_ITEM_IN_BASKET':
            return {...state, basket:state.basket.map((item:any)=>item.product_code === action.payload.product_code ? {...item, amount: item.amount += action.payload.amount}:item)}
        default:
            return {...state}
    }
}