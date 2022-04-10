// import KeenSlider from 'keen-slider';
// import 'keen-slider/keen-slider.min.css';
import {tns} from 'tiny-slider';
const dots = document.getElementById('dots');
const readMore = document.getElementById('read-more');
const readMoreButton = document.getElementById('read-more-button');
const icon = document.getElementById('rm-icon');
const sliderBanner = document.getElementById('slider-banner');
const sliderDots = document.querySelectorAll('button[aria-controls]');

// new KeenSlider("#slider-banner", {
//   loop: true,
// },
// [(slider) => {
//   let timeout
//   let mouseOver = false
//   function clearNextTimeout() {
//     clearTimeout(timeout)
//   }
//   function nextTimeout() {
//     clearTimeout(timeout)
//     if (mouseOver) return
//     timeout = setTimeout(() => {
//       slider.next()
//     }, 2000)
//   }
//   slider.on("created", () => {
//     slider.container.addEventListener("mouseover", () => {
//       mouseOver = true
//       clearNextTimeout()
//     })
//     slider.container.addEventListener("mouseout", () => {
//       mouseOver = false
//       nextTimeout()
//     })
//     nextTimeout()
//   })
//   slider.on("dragStarted", clearNextTimeout)
//   slider.on("animationEnded", nextTimeout)
//   slider.on("updated", nextTimeout)
// },])

function leerMasMenos() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Leer más";
    readMore.style.display = "none";
    icon.classList.remove('active');
    icon.classList.add('not-active');
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Leer menos";
    readMore.style.display = "inline";
    icon.classList.remove('not-active');
    icon.classList.add('active');
  }
}

if(readMoreButton !== null) {
  readMoreButton.addEventListener('click', function() {
    leerMasMenos();
  });
}

var slider = tns({
  container: '#slider-banner',
  items: 1,
  slideBy: 1,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  controls: false,
  controlsContainer: false,
  nav: true,
  navPosition: 'bottom',
  mouseDrag: true
});

if(sliderBanner) {
  document.querySelector('.tns-nav').addEventListener('click', function() {
    slider.play();
  })
}
