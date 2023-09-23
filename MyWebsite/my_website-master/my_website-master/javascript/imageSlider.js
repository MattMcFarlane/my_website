const images = document.querySelectorAll("#slider img");
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

let currentIndex = 0;

function reset() {
  // for (let i = 0; i < images.length; i++) {
  //   images[i].classList.remove('active');
  // }

  //same thing, but in a forEach loop
  images.forEach((img) => {
    img.classList.remove('active');
    img.style.zIndex = -1;
  })
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
  images[currentIndex].style.zIndex = 1;
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
  images[currentIndex].style.zIndex = 1;
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
  images[currentIndex].style.zIndex = 1;
}

initializeSlider();

//Left and Right buttons
previousImage.addEventListener('click', function() {
  resetAutoScroll();
  slideLeft();
});
nextImage.addEventListener('click', function() {
  resetAutoScroll();
  slideRight();
});

//auto scroll
let intervalRef;
function resetAutoScroll() {
  clearInterval(intervalRef);
  intervalRef = setInterval( slideRight, 7000);
}
//start scroll
resetAutoScroll();



//ToDo: remove once projects are added
//randomize all the temp images for the lulz
images.forEach((img) => {
    img.src = "https://picsum.photos/id/" + Math.floor(Math.random() * 1000).toString() +"/500/400";
  })