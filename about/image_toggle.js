document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".zoomable");

  images.forEach(function(img) {
    img.onclick = function() {
      img.classList.toggle("zoomed");
    };
  });
});
