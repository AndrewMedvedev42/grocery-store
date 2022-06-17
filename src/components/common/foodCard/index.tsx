import { useDispatch, useSelector } from 'react-redux';
import { FoodCard } from './styles';
import { Button } from 'react-bootstrap';
import addToBasket from 'redux/actions/addToBasket';

export const FoodCardComponent = ({data}:any) => {
    const dispatch = useDispatch()
    const { basket } = useSelector((state:any) => state); 
    const addItemToBasket = (item:any) => {
        dispatch(addToBasket(item, basket, 1))
    }
    return (
        <FoodCard>
            <img className="w-100 rounded mb-4" src={`${process.env.PUBLIC_URL}/media/products/bread/${data.image}`} alt={data.name} />
            <h3>{data.name}</h3>
            <div className="bottom-content d-flex align-items-center">
                <div className="prices-conteiner d-flex flex-column">
                    <span className={`${data.second_price ? ("previous-price"):("main-price")}`}>{data.first_price}$</span>
                    <span className={`${data.second_price ? ("main-price"):("d-none")}`}>{data.second_price}$</span>
                </div>
                <Button onClick={()=>{addItemToBasket(data)}} type="button" className="button ms-2">Order</Button>
            </div>
        </FoodCard>
    )
}