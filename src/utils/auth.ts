import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import { LoginData, RegisterData } from "../types/credentials";

import { auth } from "./firebase";

export const registerWithEmailAndPassword = ({email, password}: RegisterData) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;

            console.log(user);
        })
        .catch(error => {
            console.error("registerWithEmailAndPassword error", error)
            alert(error.message);
        });
}

export const loginWithEmailAndPassword = ({email, password}: LoginData) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;

            console.log(user);
        })
        .catch(error => {
            console.error("loginWithEmailAndPassword error", error)
            alert(error.message);
        });
}
