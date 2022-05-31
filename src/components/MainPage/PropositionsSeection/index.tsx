import { Base, Section } from "assets/styles/styled-components";
import { ProductList } from "./styles";
import { productList } from 'assets/data/productsList';
import { FoodCardComponent } from 'components/FoodCard';

export const PropositionsSection = () => {
    return (
        <Base>
            <Section>
                <section>
                    <h2 className="mb-4">Best propositions</h2>
                    <ProductList>
                        {
                            productList.map((item:any)=>{
                                return (
                                    <FoodCardComponent data={item}/>
                                )
                            })
                        }
                    </ProductList>
                </section>
            </Section>
        </Base>
    )
}

export default PropositionsSection