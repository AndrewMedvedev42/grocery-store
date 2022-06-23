import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Base, Section } from '../../assets/styles/styled-components';
import { SelectAmount } from "./styles";
import changeAmountInBasket from 'redux/actions/changeAmountInBasket';

export const BasketPage = () => {
    const dispatch = useDispatch()
    const { basket } = useSelector((state:any) => state); 

    return (
        <Base>
            <Section>
                <article>
                    <section>
                        <h2 className='text-center'>Basket</h2>
                    </section>
                    <section>
                    {
                        basket.map((item:any)=>{
                            const {product_code, name, amount, price} = item
                            return (
                                <section key={product_code} className='border-bottom mb-4 pb-3 d-flex justify-content-between'>
                                    <h5>{name}</h5>
                                    <SelectAmount className="border rounded">
                                        <button
                                            onClick={()=>{dispatch(changeAmountInBasket('DECREASE_AMOUNT_TO_ITEM_IN_BASKET', product_code))}} 
                                            type="button" 
                                            className="bg-transparent border-0 btn btn-link text-decoration-none"
                                        >-</button>
                                        <div className="ps-3 pe-3">
                                            <span>{amount}</span>
                                        </div>
                                        <button 
                                            onClick={()=>{dispatch(changeAmountInBasket('ADD_AMOUNT_TO_ITEM_IN_BASKET', product_code))}} 
                                            type="button" className="bg-transparent border-0 btn-link text-decoration-none"
                                        >+</button>
                                    </SelectAmount>
                                    <h4>$ {price * amount}</h4>
                                    <div className='d-flex justify-content-center'>
                                        <button 
                                            onClick={()=>{dispatch(changeAmountInBasket('DELETE_ITEM_FROM_BASKET', product_code))}} 
                                            type="button" 
                                            className="button btn-danger ms-2"
                                        >
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </button>
                                    </div>
                                </section>
                            )
                        })
                    }
                    </section>
                    <section className='d-flex justify-content-end'>
                        <button 
                            type="button" 
                            className="button"
                        >
                            Order
                        </button>
                    </section>
                </article>
            </Section>
        </Base>
    )
}