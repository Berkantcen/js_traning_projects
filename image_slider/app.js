const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const img = document.querySelectorAll('img');
const imgContainer = document.querySelectorAll('.img-slider-container');
console.log(imgContainer);
let imgCount = 0;
let moveAmount = document.getElementById('test').clientWidth;
console.log(moveAmount);

next.addEventListener('click', function () {
  if (imgCount < img.length - 1) {
    imgCount++;
  } else {
    imgCount = 0;
  }

  img.forEach((item) => {
    item.style.transform = `translateX(-${moveAmount * imgCount}px)`;
  });
});

prev.addEventListener('click', function () {
  if (imgCount == 0) {
    imgCount = img.length - 1;
  } else {
    imgCount = imgCount - 1;
  }

  img.forEach((item) => {
    item.style.transform = `translateX(-${moveAmount * imgCount}px)`;
  });
});
