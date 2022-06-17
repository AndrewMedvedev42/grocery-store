import styled from 'styled-components';

export const PropositionList = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`

export const PropositionCard= styled.section`
    padding:24px;
    border-radius:8px;
    background: linear-gradient(180deg, ${props => props.color} 0%, rgba(255,255,255,1) 100%);
`