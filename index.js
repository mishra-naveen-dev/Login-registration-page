const left_login_btn = document.getElementById("left_login_btn");
const left_register_btn = document.getElementById("left_register_btn");

let login_screen = document.getElementById("login");
let register_screen = document.getElementById("registration");

left_login_btn.addEventListener("click", () => {
  register_screen.style.display = "none";
  login_screen.style.display = "block";
});

left_register_btn.addEventListener("click", () => {
  register_screen.style.display = "block";
  login_screen.style.display = "none";
});

