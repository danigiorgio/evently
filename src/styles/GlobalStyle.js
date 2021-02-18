import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
body {
  background-color: #f7f5f5;
  font-family: 'Inter', sans-serif;
  color: rgb(80,80, 80);
}

main {   
  font-weight: 400;
  line-height: 32px;
  margin: 3rem 0;
}

.text-center {
  margin: 2rem 0;
}

svg {
  margin-right: 7px;
  vertical-align: text-bottom;
  font-size: 1.1rem;
  color: #fd4659;
}

.btn-salmon {
  background-color: #fd4659;
  border: none;
  color: #fff;
  padding: .30rem .75rem;
  border-radius: .25rem;
  &:hover {
    background-color: #b03845;
    color: #fff;
    text-decoration: none;
  }
  &:active {
    background-color: #fd4659;
  }
}
`;

export default GlobalStyle;
