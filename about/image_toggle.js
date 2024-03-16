document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".zoomable");

  images.forEach(function(img) {
    img.style.height = "100px";
    img.style.cursor = "pointer";
    img.onclick = function() {
      if (img.style.height === "100px") {
        img.style.height = "400px";
      } else {
        img.style.height = "100px";
      }
    };
  });
});
