var firebaseConfig = {
    apiKey: "AIzaSyBJS16tBscewQqhRv-LmDdCVuWEfHcf1FY",
    authDomain: "let-chat-web-app-3.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-3-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-3",
    storageBucket: "let-chat-web-app-3.appspot.com",
    messagingSenderId: "388482353947",
    appId: "1:388482353947:web:c6d67cca68662338dbe1be",
    measurementId: "G-WZJM7X3VGC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("team_name");
 window.location = "index.html";
}
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(team_names).push({
 name:user_name,
 message:msg,
 like:0
});

document.getElementById("msg").value = "";
}