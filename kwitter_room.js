// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDE8kO-9WMKOAfHPKM5TYxXSQOu0UMav9c",
  authDomain: "let-s-chat---project.firebaseapp.com",
  databaseURL: "https://let-s-chat---project-default-rtdb.firebaseio.com",
  projectId: "let-s-chat---project",
  storageBucket: "let-s-chat---project.appspot.com",
  messagingSenderId: "537595891776",
  appId: "1:537595891776:web:86213e93ce5b86feb78fa5",
  measurementId: "G-EF41SZEYY0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("welcome_username").innerHTML = "Welcome "+username;

function addRoom(){
roomname = document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
    purpose:"adding room"
});
localStorage.setItem("roomname",roomname);}

  


