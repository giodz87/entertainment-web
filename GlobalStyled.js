import { createGlobalStyle } from "styled-components";

const Globalstyled = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
  @media (min-width: 1440px) {
    display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh; 
  background-color: #10141E;
  }
}


#root {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh; 
  background-color: #10141E;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 12px;
    align-items: start;
  }
}


`;

export default Globalstyled;
