import styled from 'styled-components';

export const FoodCard = styled.div`
    padding:12px;
    border-radius:8px;
    box-shadow: 0px 0px 10px rgba(184, 180, 176, 0.5);
    text-align:center;
    .bottom-content{
        justify-content:space-between;
    }
    .btn{
        width:50%;
    }
    .prices-conteiner{
        text-align:start;
    }
    @media only screen and (max-width: 1000px) {
        .bottom-content{
            flex-direction:column;
        }
        .btn{
            width:100%;
        }
        .prices-conteiner{
            text-align:center;
        }
    }
`