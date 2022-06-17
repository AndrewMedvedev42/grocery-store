import { Base, Section } from "assets/styles/styled-components";
import { AboutSectionContainer } from "./styles";

export const AboutDeliverySection = () => {
    return (
        <Base>
            <Section>
                <AboutSectionContainer className="d-flex">
                    <section className="conntainer description-conntainer">
                        <h1>Delivery of sushi and rolls in Krasnodar</h1>
                        <p>
                            Why did rolls with ocean fish, vegetables and Japanese delicacies 
                            become a favorite dish of many Russians? First, it's very helpful. 
                            Sushi is a perfectly balanced food, a lot of healthy fats, proteins 
                            and vitamins. Secondly, dry land satisfies hunger well. Delicious 
                            Rickshaw delivery will give you an unforgettable taste experience, 
                            decorate any of your tables and will not keep you waiting long. 
                            With us you can forget about cooking, make it easy for family and friends, 
                            arrange a delicious holiday or relax with friends. All dishes are 
                            prepared exclusively from fresh products and according to the original 
                            recipes of our chef. Any item from Our Menu can be on your table 
                            in a maximum of 60 minutes!
                        </p>
                        <p>You have the option to make a reservation for a specific day and time.</p>
                    </section>
                    <section className="conntainer image-conntainer">
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/media/mainpage/suchi.png`} alt="cooker makes sushi" />
                    </section>
                </AboutSectionContainer>
            </Section>
        </Base>
    )
}

export default AboutDeliverySection
