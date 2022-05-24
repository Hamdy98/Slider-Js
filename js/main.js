let imgs = Array.from(document.querySelectorAll(".item img"));
let outBox = document.getElementById("outBox");
let innerBox = document.getElementById("innerBox");

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let close = document.getElementById("close");

let currentIndex = 0;

for(let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function(e) {
    outBox.style.display = "flex";
    let imgSrc = e.target.getAttribute("src");
    innerBox.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgs.indexOf(e.target);
  });
}

next.addEventListener("click", nextElement);
function nextElement() {
  currentIndex++;
  if(currentIndex == imgs.length) {
    currentIndex = 0;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = `url(${imgSrc})`;
}

prev.addEventListener("click", prevElement);
function prevElement() {
  currentIndex--;
  if(currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = `url(${imgSrc})`;
}

close.addEventListener("click", closeElemen);
function closeElemen() {
  outBox.style.display = "none";
}

document.addEventListener("keyup", function(e) {
  if(e.code == "ArrowRight") {
    nextElement();
  } else if (e.code == "ArrowLeft") {
    prevElement();
  } else if (e.code == "Escape") {
    closeElemen();
  }
});

outBox.addEventListener("click", function(e) {
  if(e.target.getAttribute("id") === "outBox") {
    closeElemen();
  }
});
