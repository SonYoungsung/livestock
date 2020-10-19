import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "./layout/Layout";
import AuthPresenter from "./auth/AuthPresenter";

interface Props {
  isLoggedIn: boolean;
}

function LoggedInRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={MainLayout} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

function LoggedOutRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPresenter} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

function AppRouter({ isLoggedIn }: Props) {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
}

export default AppRouter;
