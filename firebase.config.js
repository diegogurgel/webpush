var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyBoCXARawmunDfroyVvaDOxBZ6jdHZrjEM",
    authDomain: "green-link-639.firebaseapp.com",
    databaseURL: "https://green-link-639.firebaseio.com",
    projectId: "green-link-639",
    storageBucket: "green-link-639.appspot.com",
    messagingSenderId: "827747435376"
};
firebase.initializeApp(config);

module.exports = firebase

