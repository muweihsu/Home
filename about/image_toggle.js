document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("img");

  images.forEach(function(img) {
    img.style.height = "300px";
    img.style.cursor = "pointer";
    img.onclick = function() {
      if (img.style.height === "300px") {
        img.style.height = "500px";
      } else {
        img.style.height = "300px";
      }
    };
  });
});
