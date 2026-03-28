import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    }
  html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: ${props => props.theme.fonts.main};
  background: ${props => props.theme.colors.background1};
  color: ${props => props.theme.colors.primary1};
  scroll-behavior: smooth;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .bg-animation-wrapper {
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.BgAnimation__svg {
  width: 100%;
  height: auto;
  display: block;
  transform: translateX(200px);
}

@media screen and (max-width: 768px) {
  .BgAnimation__svg {
    width: 280px;
    transform: translateX(40px);
  }
}

@media screen and (max-width: 640px) {
  .BgAnimation__svg {
    width: 220px;
    opacity: 1;
    transform: translateX(40px);
  }
}
`;


export default GlobalStyles;