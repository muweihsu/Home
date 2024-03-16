// image_custom_tag.js

// 定义函数，用于切换图片大小
function toggleImageSize(imageElement) {
  var width = imageElement.style.width;
  if (width === '400px') {
    imageElement.style.width = '20px';
  } else {
    imageElement.style.width = '400px';
  }
}

// 在页面加载完成后执行的函数
document.addEventListener("DOMContentLoaded", function() {
  // 获取所有自定义标签
  var images = document.querySelectorAll("image");
  
  // 遍历每个自定义标签
  images.forEach(function(img) {
    // 创建缩略图容器
    var thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-container");

    // 创建缩略图链接
    var thumbnailLink = document.createElement("a");
    thumbnailLink.href = "#";
    thumbnailLink.onclick = function() {
      toggleImageSize(thumbnailContainer);
      return false;
    };

    // 创建缩略图图片
    var thumbnailImage = document.createElement("img");
    thumbnailImage.src = img.getAttribute("src");
    thumbnailImage.alt = img.getAttribute("alt");
    thumbnailImage.width = img.getAttribute("width") || "200";
    thumbnailImage.height = img.getAttribute("height") || "auto";
    thumbnailImage.classList.add("thumbnail-image");

    // 将缩略图图片添加到链接中
    thumbnailLink.appendChild(thumbnailImage);

    // 将链接添加到缩略图容器中
    thumbnailContainer.appendChild(thumbnailLink);

    // 将缩略图容器替换原始的自定义标签
    img.parentNode.replaceChild(thumbnailContainer, img);
  });
});
