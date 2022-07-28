
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDwg-YNX18tTTu9VXlvA2n8qJ3bNYj02Uk",
  authDomain: "kwitter-eb5d4.firebaseapp.com",
  databaseURL: "https://kwitter-eb5d4-default-rtdb.firebaseio.com",
  projectId: "kwitter-eb5d4",
  storageBucket: "kwitter-eb5d4.appspot.com",
  messagingSenderId: "65915252497",
  appId: "1:65915252497:web:fbd4b45d5d5717774aa6b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"✨";
  function addRoom() {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Adding Roomname"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Name: "+Room_names);
    var row="<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function updatelike(message_id) {
    console.log("Clicked on Like Button - "+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    firebase.databse().ref(room_name).child(message_id).update({
    });
  }
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}