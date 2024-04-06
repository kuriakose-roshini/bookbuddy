/*const studentForm = document.getElementById("studentForm");
        const facultyForm = document.getElementById("facultyForm");
        const adminForm = document.getElementById("adminForm");

        const studentUsername = document.getElementById("studentUsername");
        const studentPassword = document.getElementById("studentPassword");

        studentForm.addEventListener("Submit", (e) => {
          e.preventDefault();
          if (studentUsername.value === "student" && studentPassword.value === "password") {
            alert("Login successful!");
            // Redirect to the desired page
            window.location.href = "list.html";
          } else {
            alert("Invalid username or password.");
          }
        });

        const facultyUsername = document.getElementById("facultyUsername");
        const facultyPassword = document.getElementById("facultyPassword");

        facultyForm.addEventListener("submit", (e) => {
          e.preventDefault();
          if (facultyUsername.value === "faculty" && facultyPassword.value === "password") {
            alert("Login successful!");
            // Redirect to the desired page
            window.location.href = "list.html";
          } else {
            alert("Invalid username or password.");
          }
        });

        const adminUsername = document.getElementById("adminUsername");
        const adminPassword = document.getElementById("adminPassword");

        adminForm.addEventListener("submit", (e) => {
          e.preventDefault();
          if (adminUsername.value === "admin" && adminPassword.value === "password") {
            alert("Login successful!");
            // Redirect to the desired page
            window.location.href = "mngbook.html";
          } else {
            alert("Invalid username or password.");
          }
        });*/

        var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}