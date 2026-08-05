
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
