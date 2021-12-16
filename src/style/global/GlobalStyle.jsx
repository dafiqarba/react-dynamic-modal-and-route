import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.7;
  background-image: linear-gradient(to right, #439cfb, #f187fb);
}

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #a5699b; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a5699b; 
}

`;

export { GlobalStyle };
