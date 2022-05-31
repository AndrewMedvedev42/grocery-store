import styled from 'styled-components';

export const ProductList = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`