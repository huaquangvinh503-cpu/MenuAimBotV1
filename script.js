<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0dK1mXKkz9lRxLJzLQ7wsTKQaYVAWz7o",
  authDomain: "ktienxios-key-v2.firebaseapp.com",
  databaseURL: "https://ktienxios-key-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ktienxios-key-v2",
  storageBucket: "ktienxios-key-v2.firebasestorage.app",
  messagingSenderId: "890363362200",
  appId: "1:890363362200:web:30f87d0c503178ca8549ed",
  measurementId: "G-EE03Q38FHH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.checkKey = function(){

let key = document.getElementById("keyInput").value;

const keyRef = ref(db, "keys/" + key);

get(keyRef).then((snapshot)=>{

if(snapshot.exists()){

alert("Key hợp lệ");

document.getElementById("menu").style.display = "block";

}else{

alert("Key không tồn tại");

}

});

}

</script>
