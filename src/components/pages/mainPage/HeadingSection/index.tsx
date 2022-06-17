import { NavLink } from "react-router-dom";
import { Base, Section } from "assets/styles/styled-components";
const HeadingSection = () => {
    return (
        <Base>
            <Section>
                <article>
                    <section>
                        <div>
                            <h1>California as a gift with the first order</h1>
                            <p>starting from 1500$</p>
                            <NavLink to="/">Learn more...</NavLink>
                        </div>
                        <div>
                            <img src="/" alt="sushu with pick up stix" />
                        </div>
                    </section>
                    <section>
                        <ul>
                            <li>Free Delivery</li>
                            <li>Delivery Within 60 min</li>
                            <li>Bonuses</li>
                            <li>Fresh Products</li>
                        </ul>
                    </section>
                </article>
            </Section>
        </Base>
    )
}

export default HeadingSection