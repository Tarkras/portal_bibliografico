const dots = document.getElementById('dots');
const readMore = document.getElementById('read-more');
const readMoreButton = document.getElementById('read-more-button');
const icon = document.getElementById('rm-icon');

readMoreButton.ad

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