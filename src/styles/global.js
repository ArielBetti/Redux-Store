import { createGlobalStyle } from 'styled-components';

import Wave from '../assets/images/wave.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    body {
        background: #191920 url(${Wave}) no-repeat;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px sans-serif;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }
`;