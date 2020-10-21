import React, { useState, createContext } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import SignInContainer from "./singin/SignInContainer";
import SignUpContainer from "./signup/SignUpContainer";

type CType = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewContext = createContext<CType | undefined>(undefined);

function AuthPresenter() {
  const [view, setView] = useState(false);
  return (
    <ViewContext.Provider value={{ view, setView }}>
      <Layout
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {view === false ? (
          <SignInContainer></SignInContainer>
        ) : (
          <SignUpContainer></SignUpContainer>
        )}
      </Layout>
    </ViewContext.Provider>
  );
}

export default AuthPresenter;
export { ViewContext };
