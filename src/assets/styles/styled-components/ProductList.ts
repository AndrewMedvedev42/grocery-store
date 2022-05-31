import styled from 'styled-components';

export const ProductSection = styled.section`
    padding: 30px 0 40px;
    display:flex;
    justify-content:center;
`

export const ProductList = styled.section`
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