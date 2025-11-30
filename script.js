const student_portal = document.getElementById("student_card");
const admin_portal = document.getElementById("admin_card");
const logoutBtn = document.getElementById("logout-btn");

student_portal.addEventListener("click", () => {
  window.location.href = "studentportal.html";
});

admin_portal.addEventListener("click", () => {
  window.location.href = "AdminLogin.html";
});
