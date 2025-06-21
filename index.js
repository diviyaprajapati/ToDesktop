const toggleBtn = document.getElementById("toggleBtn");
  const menu = document.getElementById("menu");
  const icon = document.getElementById("icon");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });