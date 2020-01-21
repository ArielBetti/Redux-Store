import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    
    .ReduxIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 35px;
            padding: 5px;
        }
    }

    a {
        text-decoration: none;
    }
    
    span {
        font-size: 2em;
        font-weight: bold;
        color: #FFF;
    }

    text-decoration: none;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
`;

export const Cart = styled(Link)` 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;

    div {
        text-align: right;
        margin-right: 10px;
    }

    strong {
        display: block;
    }

    span {
        font-size: 12px;
        color: #999;
    }

`;