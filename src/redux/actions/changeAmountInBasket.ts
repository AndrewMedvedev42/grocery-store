import { Dispatch, AnyAction } from 'redux'

const changeAmountInBasket = (type:string, product_code:number) => async (dispatch:Dispatch<AnyAction>) => {
    console.log(product_code);
    
    dispatch({
        type:type,
        payload:{
            product_code:product_code,
            amount:1,
        }
    })
}     

export default changeAmountInBasket