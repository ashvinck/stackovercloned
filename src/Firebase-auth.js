import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyD-IkBAB8g8TpvuNTnI54prYMIQscKlD7Y",
    authDomain: "stackovercloned1.firebaseapp.com",
    projectId: "stackovercloned1",
    storageBucket: "stackovercloned1.appspot.com",
    messagingSenderId: "801486241394",
    appId: "1:801486241394:web:6b18fbd901dd275f440ceb",
    measurementId: "G-03WD0CVYS5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();
export const githubprovider = new GithubAuthProvider();
export const facebookprovider = new FacebookAuthProvider();
