import * as firebase from "firebase";

export const loginRequest = (email, password) => {
  firebase.auth().signinWithEmailAndPassword(email, password);
};
