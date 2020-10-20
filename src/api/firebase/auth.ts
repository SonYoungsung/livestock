import { auth, ref } from "./fsConfig";
import { toast } from "react-toastify";
import firebase from "firebase";

// export const currentUser = (setLogin) => {
//   return auth.onAuthStateChanged((user) => {
//     if (user) {
//       localStorage.setItem("uid", auth.currentUser.uid);
//       return setLogin(true);
//     }
//     return false;
//   });

// };

export const userCheck = async () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return true;
    }
    return undefined;
  });
};

export const uid = () => {
  if (auth.currentUser !== null) {
    return auth.currentUser.uid;
  }
  return undefined;
};

export const getUserName = () => {
  if (auth.currentUser !== null) {
    return auth.currentUser.displayName;
  }
};

export const signOut = () => {
  auth.signOut().then(() => {
    window.location.reload(false);
  });
};

export const signIn = (
  args: { email: string; password: string },
  setLogin: React.Dispatch<React.SetStateAction<boolean>>,
  setSpin: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { email, password } = args;

  const promise = auth
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => auth.signInWithEmailAndPassword(email, password))
    .then(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          setSpin(false);
          return setLogin(true);
        }
      });
    });

  promise.catch((err) => {
    console.log(err);
    setSpin(false);
    switch (err.code) {
      case "auth/user-not-found":
        toast.error("가입되지 않은 이메일입니다. 이메일 주소를 확인해주세요.");
        throw err;
      case "auth/invalid-email":
        toast.error("이메일을 올바른 형식으로 입력해주세요");
        throw err;
      case "auth/wrong-password":
        toast.error("비밀번호가 일치하지 않습니다. 다시 입력해주세요");
        throw err;
      default:
        throw err;
    }
  });
};

export const signUp = (
  args: {
    email: string;
    password: string;
    name: string;
  },
  setLogin: React.Dispatch<React.SetStateAction<boolean>>,
  setSpin: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { email, password, name } = args;

  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise
    .then(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user && auth.currentUser) {
          const uid = auth.currentUser.uid;
          await auth.currentUser.updateProfile({
            displayName: name,
          });
          await ref.child(`users/${uid}/name`).set(name);
          await ref.child(`users/${uid}/id`).set(email);
          ref
            .child(`users/${uid}/auth`)
            .set("일반회원")
            .then(() => {
              setSpin(false);
              setLogin(true);
            });
        }
      });
    })
    .catch((err) => {
      setSpin(false);
      switch (err.code) {
        case "auth/weak-password":
          toast.error("비밀 번호를 6자 이상으로 입력해주세요.");
          break;
        case "auth/email-already-in-use":
          toast.error(
            "이미 가입한 이메일 주소입니다. 이메일 주소를 확인해주세요."
          );
          break;
        default:
          break;
      }
    });
};

export const chenagePassword = (uid: string) => {
  // auth.
};
