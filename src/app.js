// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { get, ref, getDatabase, child } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDrGT4yAEUP4nmZXgBWly9SVrVDZWBgAnE",
authDomain: "ngo-school-website.firebaseapp.com",
databaseURL: "https://ngo-school-website-default-rtdb.firebaseio.com",
projectId: "ngo-school-website",
storageBucket: "ngo-school-website.appspot.com",
messagingSenderId: "1000893269109",
appId: "1:1000893269109:web:c22254ec843311b3cfe43c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

get(child(dbRef, "/")).then((snapshot) => {
    console.log(snapshot.val())
     const teacherName = document.getElementById("teacherName");
     teacherName.innerHTML = snapshot.val().teacherName;
    }).catch((error) => {  
        console.error(error);
    }
);