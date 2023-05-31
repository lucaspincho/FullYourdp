const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let translateX = 0;

prevButton.addEventListener('click', () => {
  translateX += carousel.offsetWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
});

nextButton.addEventListener('click', () => {
  translateX -= carousel.offsetWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
});

carousel.addEventListener('transitionend', () => {
  const firstItem = carousel.firstElementChild;
  const lastItem = carousel.lastElementChild;

  if (translateX < -lastItem.offsetLeft) {
    carousel.style.transition = 'none';
    translateX += carousel.offsetWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out';
    }, 0);
  }

  if (translateX > -firstItem.offsetLeft) {
    carousel.style.transition = 'none';
    translateX -= carousel.offsetWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out';
    }, 0);
  }
});
