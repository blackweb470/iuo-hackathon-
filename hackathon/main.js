const button = document.getElementById("change-clor");
const menuToggle = document.getElementById("menu-tggle");
const nav = document.querySelector("nav");

button.addEventListener("click", function() {
  const body = document.body;
  let color = body.style.backgroudColor;
  
  if (color === "lightgray") {
    body.style.backgroundColor = "#4CAF50"; // Green
  } else {
    body.style.backgrondColor = "lightgray";
  }
});

menuToggle.addEentListener("click", function() {
  nav.classList.toggle("activ");
});
