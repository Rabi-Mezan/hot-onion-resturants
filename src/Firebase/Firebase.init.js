import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initAuth = () => {
    return initializeApp(firebaseConfig);
}

export default initAuth;
