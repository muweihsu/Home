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

<!-- Import the CSS file -->
<link rel="stylesheet" type="text/css" href="image_styles.css">

<!-- Image thumbnail -->
<div class="thumbnail-container">
  <a href="#" onclick="toggleImageSize(this.children[0]); return false;">
    <img src="path_to_your_image" alt="Image description" class="thumbnail-image" width="200" height="auto">
  </a>
</div>