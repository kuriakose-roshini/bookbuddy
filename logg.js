const studentForm = document.getElementById("studentForm");
        const facultyForm = document.getElementById("facultyForm");
        const adminForm = document.getElementById("adminForm");

        const studentUsername = document.getElementById("studentUsername");
        const studentPassword = document.getElementById("studentPassword");

        studentForm.addEventListener("submit", (e) => {
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
        });