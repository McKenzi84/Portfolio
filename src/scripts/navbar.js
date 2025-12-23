document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  if (!burger || !navLinks) return;

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});
