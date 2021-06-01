import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCTXVzMU2wWV8L9lJrcd1Tu5iqtxmkblmI",
    authDomain: "movie-app-55896.firebaseapp.com",
    databaseURL: "https://movie-app-55896-default-rtdb.firebaseio.com",
    projectId: "movie-app-55896",
    storageBucket: "movie-app-55896.appspot.com",
    messagingSenderId: "119987161984",
    appId: "1:119987161984:web:93faae6ded7f7348474f65"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase