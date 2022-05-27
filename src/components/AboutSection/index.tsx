import { Base, Section } from "assets/styles/styled-components";

export const AboutSection = () => {
    return (
        <Base>
            <Section>
                <article>
                    <section>
                        <h1>About Company</h1>
                        <p>Delicious Rickshaw delivery will give you an unforgettable taste experience, decorate any of your tables and will not keep you waiting long. With us you can forget about cooking, make it easy for family and friends, arrange a delicious holiday or relax with friends. All dishes are prepared exclusively from fresh products and according to the original recipes of our chef.</p>
                        <p>Any item from Our Menu can be on your table in a maximum of 60 minutes! You have the option to make a reservation for a specific day and time.</p>
                    </section>
                    <section>
                        <img src="/" alt="cooker makes sushi" />
                    </section>
                </article>
            </Section>
        </Base>
    )
}

export default AboutSection