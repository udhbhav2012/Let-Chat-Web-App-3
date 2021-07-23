var firebaseConfig = {
    apiKey: "AIzaSyBGUm6CZaU7mgJzRbRFg_FBLsCFX6YaGqY",
    authDomain: "let-chat-web-app-2.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-2-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-2",
    storageBucket: "let-chat-web-app-2.appspot.com",
    messagingSenderId: "682989632053",
    appId: "1:682989632053:web:0c2372b83653d669b98f7c",
    measurementId: "G-F2S53Q3WSP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom()
{
    Room_names = document.getElementById("team_name").value;

    firebase.database().ref("/").child(Team_names).update({
          purpose : "adding team name"
    });
    localStorage.setItem("Team_names", Room_names);
    window.location = kwitter_page.html;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Team_names = childKey;
    //Start codex
    console.log("Team Name - " + Team_names);
    row = "<div class='team_name' id="+Room_names+" onclick='redirectToTeamName(this.id)' >#"+ Team_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToTeamName(name)
{
    console.log(name);
    localStorage.setItem("team_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("team_name");
    window.location = "index.html";
}