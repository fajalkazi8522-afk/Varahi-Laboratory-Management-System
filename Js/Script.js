
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

hb: document.getElementById("hb").value,

wbc: document.getElementById("wbc").value,

rbc: document.getElementById("rbc").value,

platelet: document.getElementById("platelet").value,

pcv: document.getElementById("pcv").value,

mcv: document.getElementById("mcv").value
  
mch: document.getElementById("mch").value,

mchc: document.getElementById("mchc").value,

neutrophils: document.getElementById("neutrophils").value,

lymphocytes: document.getElementById("lymphocytes").value,
};

localStorage.setItem("cbcReport", JSON.stringify(cbc));

alert("CBC Report Saved Successfully");

}

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
window.addEventListener("load", function () {

let cbc = JSON.parse(localStorage.getItem("cbcReport"));

if(cbc){

if(document.getElementById("showHb"))
document.getElementById("showHb").innerHTML = cbc.hb;

if(document.getElementById("showWbc"))
document.getElementById("showWbc").innerHTML = cbc.wbc;

if(document.getElementById("showRbc"))
document.getElementById("showRbc").innerHTML = cbc.rbc;

if(document.getElementById("showPlatelet"))
document.getElementById("showPlatelet").innerHTML = cbc.platelet;

}

});
