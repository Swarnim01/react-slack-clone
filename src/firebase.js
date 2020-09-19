import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAq5QzfFAbVWf2UcdS7QKtMer3znAztycI',
  authDomain: 'react-slack-9f9d5.firebaseapp.com',
  databaseURL: 'https://react-slack-9f9d5.firebaseio.com',
  projectId: 'react-slack-9f9d5',
  storageBucket: 'react-slack-9f9d5.appspot.com',
  messagingSenderId: '561738058661',
  appId: '1:561738058661:web:9faabbcf485673395cb64c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const SignInwithGoogle = () => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(GoogleProvider);
};
