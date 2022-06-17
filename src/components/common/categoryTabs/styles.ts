import styled from 'styled-components';

export const PreviewCategoryMenu = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`