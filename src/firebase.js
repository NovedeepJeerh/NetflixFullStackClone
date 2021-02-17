import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5oGitVudA3p-EJpWLZZypzU3uGzA2smE",
    authDomain: "netflix-clone-yt-7f92d.firebaseapp.com",
    projectId: "netflix-clone-yt-7f92d",
    storageBucket: "netflix-clone-yt-7f92d.appspot.com",
    messagingSenderId: "906757484497",
    appId: "1:906757484497:web:c2ad85b05f6010e54cbaf0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;