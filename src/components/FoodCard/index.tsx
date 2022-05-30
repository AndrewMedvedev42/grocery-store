import { FoodCard } from './styles';

export const FoodCardComponent = ({data}:any) => {
    return (
        <FoodCard>
            <h3>{data.name}</h3>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                {
                    data.second_price ? (
                        <>
                            <span>{data.first_price}</span>
                            <span className="">{data.second_price}</span>
                        </>
                    ):(
                        <span>{data.first_price}</span>
                    )   
                }
                </div>
                <button>Order</button>
            </div>
        </FoodCard>
    )
}