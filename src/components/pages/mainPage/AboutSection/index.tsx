import { Base, Section } from "assets/styles/styled-components";
import { AboutSectionContainer } from "./styles";

export const AboutSection = () => {
    return (
        <Base>
            <Section>
                <AboutSectionContainer className="d-flex">
                    <section className="conntainer description-conntainer">
                        <h1>About Company</h1>
                        <p>Delicious Rickshaw delivery will give you an unforgettable taste experience, decorate any of your tables and will not keep you waiting long. With us you can forget about cooking, make it easy for family and friends, arrange a delicious holiday or relax with friends. All dishes are prepared exclusively from fresh products and according to the original recipes of our chef.</p>
                        <p>Any item from Our Menu can be on your table in a maximum of 60 minutes! You have the option to make a reservation for a specific day and time.</p>
                    </section>
                    <section className="conntainer image-conntainer">
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/media/mainpage/suchi.png`} alt="cooker makes sushi" />
                    </section>
                </AboutSectionContainer>
            </Section>
        </Base>
    )
}

export default AboutSection