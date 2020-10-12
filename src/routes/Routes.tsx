import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInPresenter from "./auth/singin/SignInPresenter";
import SignUpPresenter from "./auth/signup/SignUpPresenter";
import MainPresenter from "./main/MainPresenter";

interface Props {
  isLoggedIn: boolean;
}

function LoggedInRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPresenter} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

function LoggedOutRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={SignInPresenter} />
      <Route exact path="/signup" component={SignUpPresenter} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

function AppRouter({ isLoggedIn }: Props) {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
}

export default AppRouter;
