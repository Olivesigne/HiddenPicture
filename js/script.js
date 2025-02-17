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

  let downloadBtn = document.getElementById("download-apk");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut temporairement

      let apkUrl = downloadBtn.getAttribute("href");

      // Démarrer le téléchargement en créant un lien temporaire
      let a = document.createElement("a");
      a.href = apkUrl;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Rediriger immédiatement après le téléchargement
      setTimeout(function () {
        window.location.href = "downloading.html";
      }, 1000); // Attendre 1 seconde pour assurer le déclenchement du téléchargement
    });
  }
});
