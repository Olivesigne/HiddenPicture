document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".zoomable");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", function () {
      lightboxImg.src = this.src;
      lightbox.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.classList.add("hide");
    setTimeout(() => {
      lightbox.classList.remove("show", "hide");
    }, 300);
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
      lightbox.classList.add("hide");
      setTimeout(() => {
        lightbox.classList.remove("show", "hide");
      }, 300);
    }
  });
});
