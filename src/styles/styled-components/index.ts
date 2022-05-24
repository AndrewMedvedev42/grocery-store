import styled from 'styled-components';

export const Base = styled.article`
    display:flex;
    justify-content:center;
    border:2px solid blue;
`

export const Section = styled.section`
    width:75%;
    border:5px solid orange;

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`