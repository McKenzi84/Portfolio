document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!(lightbox instanceof HTMLElement)) return;
  if (!(lightboxImg instanceof HTMLImageElement)) return;

  document.querySelectorAll(".photo-grid img").forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;

    img.addEventListener("click", () => {
      const full = img.dataset.full;
      if (!full) return;

      lightboxImg.src = full;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });
});
