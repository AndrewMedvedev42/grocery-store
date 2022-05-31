import { Base, Section } from "assets/styles/styled-components";
import { Button } from 'react-bootstrap';

export const ProductInfoSection = () => {
    return (
        <Base>
            <Section>
                <article className="d-flex justify-content-between">
                    <section>
                        <img src="/" alt="product-image" />
                    </section>
                    <section>
                        <h1>Product name</h1>
                        <span>Weight:---</span>
                        <div className="bottom-content d-flex align-items-center">
                        <div className="prices-conteiner d-flex flex-column">
                            <span>---</span>
                            <span>---</span>
                        </div>
                        <div>
                            <div>
                            <Button type="button" className="button ms-2">-</Button>
                            <span>---</span>
                            <Button type="button" className="button ms-2">+</Button>
                            </div>
                            <Button type="button" className="button ms-2">Order</Button>
                        </div>
                    </div>
                    </section>
                </article>            
            </Section>
        </Base>
    )
}