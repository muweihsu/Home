document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("img");

  images.forEach(function(img) {
    img.style.height = "50px";
    img.style.cursor = "pointer";
    img.onclick = function() {
      if (img.style.height === "50px") {
        img.style.height = "400px";
      } else {
        img.style.height = "50px";
      }
    };
  });
});
