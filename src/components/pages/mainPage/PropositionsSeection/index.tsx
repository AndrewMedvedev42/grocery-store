import { v4 as uuid } from 'uuid';
import { Base, Section } from "assets/styles/styled-components";
import { ProductList } from "assets/styles/styled-components/ProductList";
import { FoodCardComponent } from 'components/common/foodCard';

import { productList } from 'assets/data/productsList';

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
                                    <FoodCardComponent key={uuid()} data={item}/>
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