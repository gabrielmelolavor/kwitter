const firebaseConfig = {
  apiKey: "AIzaSyD-eUp04UO56PlFd91-Bg-hIINymO6MM1M",
  authDomain: "vamos-conversar-2a050.firebaseapp.com",
  databaseURL: "https://vamos-conversar-2a050-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-2a050",
  storageBucket: "vamos-conversar-2a050.appspot.com",
  messagingSenderId: "700547755428",
  appId: "1:700547755428:web:7702e39109848f8be6e531"
};

  //inicializar firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "bem-vindo(a)" + user_name + "!";

//função para criar sala no firebase

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
   purpose : "adicionar nome da sala"
}) 
 
  localStorage.getItem("room_name",room_name);

  window.location = "kwitter_page.html"

}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData()

//função que direciona a sala escolhida

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",name),
 window.location = "kwitter_page.html";
}

function logout(){

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}




