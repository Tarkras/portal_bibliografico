
// import KeenSlider from 'keen-slider';
// import 'keen-slider/keen-slider.min.css';
const dots = document.getElementById('dots');
const readMore = document.getElementById('read-more');
const readMoreButton = document.getElementById('read-more-button');
const icon = document.getElementById('rm-icon');
// new KeenSlider("#slider", {
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

readMoreButton.addEventListener('click', function() {
  leerMasMenos();
});


// function navigation(slider) {
//   let wrapper, dots, arrowLeft, arrowRight

//   function markup(remove) {
//     wrapperMarkup(remove)
//     dotMarkup(remove)
//     arrowMarkup(remove)
//   }

//   function removeElement(elment) {
//     elment.parentNode.removeChild(elment)
//   }
//   function createDiv(className) {
//     var div = document.createElement("div")
//     var classNames = className.split(" ")
//     classNames.forEach((name) => div.classList.add(name))
//     return div
//   }

//   function arrowMarkup(remove) {
//     if (remove) {
//       removeElement(arrowLeft)
//       removeElement(arrowRight)
//       return
//     }
//     arrowLeft = createDiv("arrow arrow--left")
//     arrowLeft.addEventListener("click", () => slider.prev())
//     arrowRight = createDiv("arrow arrow--right")
//     arrowRight.addEventListener("click", () => slider.next())

//     wrapper.appendChild(arrowLeft)
//     wrapper.appendChild(arrowRight)
//   }

//   function wrapperMarkup(remove) {
//     if (remove) {
//       var parent = wrapper.parentNode
//       while (wrapper.firstChild)
//         parent.insertBefore(wrapper.firstChild, wrapper)
//       removeElement(wrapper)
//       return
//     }
//     wrapper = createDiv("navigation-wrapper")
//     slider.container.parentNode.appendChild(wrapper)
//     wrapper.appendChild(slider.container)
//   }

//   function dotMarkup(remove) {
//     if (remove) {
//       removeElement(dots)
//       return
//     }
//     dots = createDiv("dots")
//     slider.track.details.slides.forEach((_e, idx) => {
//       var dot = createDiv("dot")
//       dot.addEventListener("click", () => slider.moveToIdx(idx))
//       dots.appendChild(dot)
//     })
//     wrapper.appendChild(dots)
//   }

//   function updateClasses() {
//     var slide = slider.track.details.rel
//     slide === 0
//       ? arrowLeft.classList.add("arrow--disabled")
//       : arrowLeft.classList.remove("arrow--disabled")
//     slide === slider.track.details.slides.length - 1
//       ? arrowRight.classList.add("arrow--disabled")
//       : arrowRight.classList.remove("arrow--disabled")
//     Array.from(dots.children).forEach(function (dot, idx) {
//       idx === slide
//         ? dot.classList.add("dot--active")
//         : dot.classList.remove("dot--active")
//     })
//   }

//   slider.on("created", () => {
//     markup()
//     updateClasses()
//   })
//   slider.on("optionsChanged", () => {
//     console.log(2)
//     markup(true)
//     markup()
//     updateClasses()
//   })
//   slider.on("slideChanged", () => {
//     updateClasses()
//   })
//   slider.on("destroyed", () => {
//     markup(true)
//   })
// }
