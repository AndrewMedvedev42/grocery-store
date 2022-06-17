import { Dispatch, AnyAction } from 'redux'
import { useSelector } from 'react-redux';

const addToBasket = (data:any, basket:any, count:number) => async (dispatch:Dispatch<AnyAction>) => {
    if (basket.some((item:any)=>item.product_code === data.product_code)) {
        dispatch({
            type:'UPDATE_ITEM_IN_BASKET',
            payload:{
                product_code:data.product_code,
                amount:count,
            }
        })
    } else {
        const price = data.second_price ? data.second_price : data.first_price
        dispatch({
            type:'ADD_TO_BASKET',
            payload:{
                product_item:{
                    product_code:data.product_code,
                    name:data.name,
                    amount:count,
                    price:price
                },
        }
    })    
    }     
}
export default addToBasket