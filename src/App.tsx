import React, { useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/style/GlobalStyle";
import Theme from "./assets/style/Theme";
import { HashRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { userCheck } from "./api/firebase/auth";
import { connect } from "react-redux";

type CType = {
  isLoggedIn: {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.colors.primary};
  width: 100%;
`;

const LoginContext = createContext<CType | undefined>(undefined);

function App() {
  const [login, setLogin] = useState(userCheck() === undefined ? false : true);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <LoginContext.Provider value={{ isLoggedIn: { login, setLogin } }}>
        <HashRouter>
          <Wrapper>
            <Routes isLoggedIn={login}></Routes>
          </Wrapper>
        </HashRouter>
      </LoginContext.Provider>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </ThemeProvider>
  );
}

function mapStateToProps(state: {}) {
  return { store: state };
}

function mapDispatchToProps(dispatch: any) {
  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
export { LoginContext };
