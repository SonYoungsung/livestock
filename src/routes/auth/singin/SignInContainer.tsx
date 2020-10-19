import React from "react";
import SignInPresenter from "./SignInPresenter";
import { signIn } from "../../../api/firebase/auth";

function SignInContainer() {
  return <SignInPresenter signIn={signIn}></SignInPresenter>;
}

export default SignInContainer;
