import { Base, Section } from "assets/styles/styled-components";
import { PropositionList, PropositionCard } from './styles';
import data from "./data.json";

export const SpeacialsSection = () => {
    return (
        <Base>
            <Section>
                <section>
                    <h2>Specials</h2>
                    <PropositionList>
                        {
                            data.map(({title, description})=>{
                                return (
                                    <PropositionCard color="pink" className="border">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </PropositionCard>
                                )
                            })
                        }
                    </PropositionList>
                </section>
            </Section>
        </Base>
    )
}

export default SpeacialsSection