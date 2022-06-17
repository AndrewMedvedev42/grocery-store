import { FoodCard } from './styles';
import { Button } from 'react-bootstrap';

export const FoodCardComponent = ({data}:any) => {
    return (
        <FoodCard>
            <img className="w-100 rounded mb-4" src={`${process.env.PUBLIC_URL}/media/products/bread/${data.image}`} alt={data.name} />
            <h3>{data.name}</h3>
            <div className="bottom-content d-flex align-items-center">
                <div className="prices-conteiner d-flex flex-column">
                    <span className={`${data.second_price ? ("previous-price"):("main-price")}`}>{data.first_price}$</span>
                    <span className={`${data.second_price ? ("main-price"):("d-none")}`}>{data.second_price}$</span>
                </div>
                <Button type="button" className="button ms-2">Order</Button>
            </div>
        </FoodCard>
    )
}