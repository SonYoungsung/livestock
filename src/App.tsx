import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/style/GlobalStyle";
import Theme from "./assets/style/Theme";
import { HashRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.colors.primary};
  width: 100%;
`;

const isLoggedIn: boolean = true;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <HashRouter>
        <Wrapper>
          <Routes isLoggedIn={isLoggedIn}></Routes>
        </Wrapper>
      </HashRouter>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </ThemeProvider>
  );
}

export default App;
