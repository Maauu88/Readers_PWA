function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user && pass) {
    localStorage.setItem("user", user);
    window.location.href = "index.html";
  } else {
    alert("Completa todos los campos");
  }
}
