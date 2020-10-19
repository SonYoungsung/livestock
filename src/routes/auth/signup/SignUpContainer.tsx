import React from "react";
import SignUpPresenter from "./SignUpPresenter";
import { signUp } from "../../../api/firebase/auth";

function SignUpContainer() {
  return <SignUpPresenter signUp={signUp}></SignUpPresenter>;
}

export default SignUpContainer;
