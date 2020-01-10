import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
      display: flex;
      flex-direction: column;
      background-color: #FFF;
      border-radius: 6px;
      padding: 20px;
      transition: 350ms;

    img {
        max-width: 200px;
        margin: 0 auto;
    }

    > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
    }

    > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
    }

    button {
        background: #4a148c;
        border: none;
        padding: 5px;
        border-radius: 4px;
        color: #FFF;
        display: flex;
        margin-top: auto;
        justify-content: flex-start;
        align-items: center;
        text-transform: uppercase;
        font-size: 12px;
        transition: background 350ms;
        cursor: pointer;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            background: rgba(0,0,0, 0.1);
            border-radius: 5px;
        }
        span {
        flex: 1;
        text-align: center;
        font-weight: bold;
    }
    }

    button:hover {
        background: ${darken(0.05, '#4a148c')};
    }
    
  }

  li:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 10px rgba(0,0,0, 0.3);
  }


`;
