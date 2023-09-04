let imageElement = document.getElementById("image");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

let images = ["images/image1.png", "images/image2.png", "images/image3.png"];
let currentIndex = 0;

function updateImage() {
  imageElement.src = images[currentIndex];
  
  if (currentIndex === 0) {
    prevButton.style.display = "none"; 
  } else {
    prevButton.style.display = "block";
  }
  
  if (currentIndex === images.length - 1) {
    nextButton.style.display = "none"; 
  } else {
    nextButton.style.display = "block"; 
  }
}

prevButton.addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextButton.addEventListener("click", function() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

updateImage();