var firebaseConfig = {
      apiKey: "AIzaSyBoEU1sikNV7AQpROx6BNSCdscE-mW2Dq8",
      authDomain: "let-s-chat-8c612.firebaseapp.com",
      databaseURL: "https://let-s-chat-8c612-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-8c612",
      storageBucket: "let-s-chat-8c612.appspot.com",
      messagingSenderId: "1028836706950",
      appId: "1:1028836706950:web:aee55c1fae67f0ab769f07",
      measurementId: "G-7L9BPLKJP0"
    };
    
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML= "welcome "  + user_name + "!";

 function addroom()
 {
    room_name = document.getElementById("room_name").Value;

    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
      
       console.log("room_name - " + Room_names);
       row = "<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
 
       
       });});}
       getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}