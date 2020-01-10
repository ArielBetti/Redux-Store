import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`

    width: 100%;
    background-color: #FFF;
    border-radius: 4px;
    padding: 5px 0 5px 0;

    footer {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    div {
        display: flex;
        align-items: baseline;
        flex-direction: column;
    }
    button {
        border: none;
        background-color: #4a148c;
        color: #FFF;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: 350ms;

        &:hover {
            background-color: ${darken(0.05, '#4a148c')}
        }
        
    }

    span {
        font-size: 12px;
        text-transform: uppercase;
        color: #999;
        font-weight: bold;
    }
    
    strong {
        font-size: 20px;
        font-weight: bold;
    }

    }
`;

export const ProductTable = styled.div `

    .ProductMargin {
        margin: 10px;
        width: 100%;
        border-left: 3px solid #4a148c;
        display: flex;
        padding: 10px;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
    }
    /* padding: 20px 0 20px 0; */
    .ProductColumn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    max-height: 600px;
    overflow: auto;
    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        margin-top: 5px;
        font-size: 15px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            border: 1px solid #DDD;
            border-radius: 4px;
            width: auto;
            color: #666;
            padding: 5px;
            width: 30px;
        }

        button {
            background: none;
            border: 0;
            padding: 6px;
            margin: 15px;
            cursor: pointer;
        }
    }
`;
