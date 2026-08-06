// Varahi Laboratory Management System

function showMessage(message){
    alert(message);
}

console.log("Varahi Laboratory Management System Loaded Successfully");
function savePatient(){

let patient={

name:document.getElementById("name").value,

age:document.getElementById("age").value,

gender:document.getElementById("gender").value,

mobile:document.getElementById("mobile").value,

address:document.getElementById("address").value

};

localStorage.setItem("patient",JSON.stringify(patient));

alert("Patient Saved Successfully");

}
