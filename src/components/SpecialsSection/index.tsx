import { Base, Section } from "assets/styles/styled-components";
import data from "./data.json";

export const SpeacialsSection = () => {
    return (
        <Base>
            <Section>
                <section>
                    <h1>Specials</h1>
                    <section>
                        {
                            data.map(({title, description, image})=>{
                                return (
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <img src={image} alt="little sushi characters" />
                                    </div>
                                )
                            })
                        }
                    </section>
                </section>
            </Section>
        </Base>
    )
}

export default SpeacialsSection