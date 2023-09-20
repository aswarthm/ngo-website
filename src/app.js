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
     const schoolAddress = document.getElementById("schoolAddress");
     const designation = document.getElementById("designation");
     const gender = document.getElementById("gender");
     const reservation = document.getElementById("reservation");
     const dateOfBirth = document.getElementById("dateOfBirth");
     const maritalStatus = document.getElementById("maritalStatus");
     const kids = document.getElementById("kids");
     const kidsEducation = document.getElementById("kidsEducation");
     const hobbies = document.getElementById("hobbies");
     const teacherAddress = document.getElementById("teacherAddress");


     teacherName.innerHTML = snapshot.val().teacherName;
        schoolAddress.innerHTML = snapshot.val().schoolAddress;
        designation.innerHTML = snapshot.val().designation;
        gender.innerHTML = snapshot.val().gender;
        reservation.innerHTML = snapshot.val().reservation;
        dateOfBirth.innerHTML = snapshot.val().dateOfBirth;
        maritalStatus.innerHTML = snapshot.val().married;
        kids.innerHTML = snapshot.val().noOfKids;
        kidsEducation.innerHTML = listToStr(snapshot.val().kidsEducation);
        hobbies.innerHTML = snapshot.val().hobbies;
        teacherAddress.innerHTML = snapshot.val().teacherAddress + "<br>" + snapshot.val().teacherPhoneNumber;
    }).catch((error) => {  
        console.error(error);
    }
);

function listToStr(arr){
    var strr = ""

    for (let i = 0; i < arr.length; i++) {
        strr += (i+1) + ")" + arr[i] + "<br>";
    }

    return strr;
}