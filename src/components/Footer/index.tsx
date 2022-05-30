import { FooterSection } from "./styles";
import { Section } from "assets/styles/styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
    return (
        <FooterSection>
            <Section className="footer-container">
                <section className="footer-section">
                    <img src="/" alt="main-logo" />
                </section>
                <section className="footer-section">
                    <ul className="footer-navigation-list">
                        <li>About Us</li>
                        <li>Delivery</li>
                    </ul>
                </section>
                <section className="footer-section">
                    <ul className="footer-cetegory-list">
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
                <section className="footer-section footer-contacts">
                    <h4>+7 (495) 617-14-24</h4>
                    <p>from 10:00 to 23:00</p>
                    <ul className="footer-social-media-list">
                        <li>{<FontAwesomeIcon className="fa-1x" icon={faFacebookF} />}</li>
                        <li>{<FontAwesomeIcon className="fa-1x" icon={faInstagram} />}</li>
                        <li>{<FontAwesomeIcon className="fa-1x" icon={faTwitter} />}</li>
                    </ul>
                </section>
            </Section>
        </FooterSection>
    )
}