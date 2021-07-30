import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #f5f5f5;
    --color-link: #0073b1;
    --color-bar: #ebebeb;
    --color-black: rgba(0,0,0,.9);
    --color-white: #fff;
    --color-blue: #00bfff;
    --color-green: #4cbb17;
    --color-orange: #f28500;
    --color-gray: rgba(0,0,0,.6);
    --color-gray-light: #f2f2f2;
    --color-gray-light2: #c2c2c2;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--color-background);
  }

  body, input, button {
    font: 16px Mulish, sans-serif;
  }

  #root {
    margin: 0 auto;
    padding: 16px 8px;
  }

  button {
    cursor: pointer;
  }
`;
