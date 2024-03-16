// image_zoom.js

// Define a function to toggle image size
function toggleImageSize(imageElement) {
  // Get the width of the image element
  var width = imageElement.style.width;
  // If the width is 400px, set it to 200px; otherwise, set it to 400px
  if (width === '400px') {
    imageElement.style.width = '40px';
  } else {
    imageElement.style.width = '400px';
  }
}