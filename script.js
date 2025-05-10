let index = 0;
const images = document.querySelectorAll(".carousel-image");
function showNextImage() {
  images.forEach(img => img.style.display = "none");
  index = (index + 1) % images.length;
  images[index].style.display = "block";
}
setInterval(showNextImage, 3000);
images[0].style.display = "block";
