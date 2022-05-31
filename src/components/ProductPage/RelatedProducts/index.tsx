import { Section } from "assets/styles/styled-components";
import { ProductSection, ProductList } from "assets/styles/styled-components/ProductList";
import { productList } from 'assets/data/productsList';
import { FoodCardComponent } from 'components/FoodCard';

export const RelatedProducts = () => {
    return (
        <ProductSection>
            <Section>
                <section>
                    <h2 className="mb-4">Related</h2>
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
        </ProductSection>
    )
}