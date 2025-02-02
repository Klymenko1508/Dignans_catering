let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelector('.carousel-dots');

function showNextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -100 * currentIndex; // Move the carousel items
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

  // Update the active dot
  const activeDot = document.querySelector('.carousel-dots .active');
  if (activeDot) {
    activeDot.classList.remove('active');
  }
  dots.children[currentIndex].classList.add('active');
}

function createDots() {
  items.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    dots.appendChild(dot);
  });
  updateCarousel();
}

createDots();

// Start automatic slide change every 5 seconds
setInterval(showNextSlide, 5000);
