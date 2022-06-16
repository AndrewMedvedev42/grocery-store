import styled from 'styled-components';

export const AboutSectionContainer = styled.article`
    justify-content:space-between;
    .conntainer{
        display: flex;
        flex-direction:column;
        justify-content:center;
    }
    .description-conntainer{
        width:50%;
    }
    .image-conntainer{
        width:40%;
    }
    @media only screen and (max-width: 900px) {
        .description-conntainer{
            width:100%;
            text-align:center;
        }
        .image-conntainer{
            display:none
        }
    }
`