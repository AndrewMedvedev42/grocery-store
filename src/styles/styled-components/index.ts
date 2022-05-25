import styled from 'styled-components';

export const Base = styled.article`
    display:flex;
    justify-content:center;
    border-bottom:2px solid blue;
`

export const Section = styled.section`
    width:75%;
    border:2px solid orange;

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`