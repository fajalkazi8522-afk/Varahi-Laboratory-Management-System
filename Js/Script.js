
function savePatient() {

function getpatient = {

name: document.getElementById("name")?.value || "",

age: document.getElementById("age")?.value || "",

mobile: document.getElementById("mobile")?.value || "",

test: document.getElementById("test")?.value || ""

};

localStorage.setItem("patient", JSON.stringify(patient));

alert("Patient Saved Successfully");

}
window.onload = function () {

let patient = JSON.parse(localStorage.getItem("patient"));

let box = document.getElementById("patientData");

if(box && patient){

box.innerHTML = `
<h3>Saved Patient</h3>

<p><b>Name:</b> ${patient.name}</p>

<p><b>Age:</b> ${patient.age}</p>

<p><b>Mobile:</b> ${patient.mobile}</p>

<p><b>Test:</b> ${patient.test}</p>
`;

}

}
function saveCBC() {

let cbc = {

name: document.getElementById("cbcName").value,

hb: document.getElementById("hb").value

};

localStorage.setItem("cbcReport", JSON.stringify(cbc));

alert("CBC Report Saved Successfully");

}
function viewCBC() {

let cbc = JSON.parse(localStorage.getItem("cbcReport"));

if(cbc){

alert(
"Patient: " + cbc.name +
"\nHemoglobin: " + cbc.hb
);

}else{

alert("No CBC Report Found");

}

}
