import { FooterSection } from "./styles";

export const Footer = () => {
    return (
        <FooterSection>
            <section>
                <img src="/" alt="main-logo" />
            </section>
            <section>
                <ul>
                    <li>About Us</li>
                    <li>Delivery</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li>Pizza</li>
                    <li>Sushi</li>
                    <li>Rolls</li>
                    <li>Sets</li>
                    <li>Wok</li>
                    <li>Soup</li>
                    <li>Salads</li>
                    <li>Desserts</li>
                    <li>Drinks</li>
                    <li>Discount</li>
                </ul>
            </section>
            <section>
                <h4>+7 (495) 617-14-24</h4>
                <p>from 10:00 to 23:00</p>
                <div>
                    <span>facebook</span>
                    <span>Instagram</span>
                    <span>Twitter</span>
                </div>
            </section>
        </FooterSection>
    )
}