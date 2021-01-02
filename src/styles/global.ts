import { createGlobalStyle } from 'styled-components';
import backgroundGlobal from '../assets/backgroundGlobal.svg';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:${({ theme }) =>
      theme.colors['renault-white']} url(${backgroundGlobal}) no-repeat 70% top;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: ${({ theme }) => theme.fonts.roboto}
  }
  #root{
    max-width:960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }

`;
