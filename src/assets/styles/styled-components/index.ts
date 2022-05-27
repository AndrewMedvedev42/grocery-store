import styled from 'styled-components';

export const Base = styled.article`
    padding: 40px 0 50px;
    display:flex;
    justify-content:center;
`

export const Section = styled.section`
    width:75%;
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`