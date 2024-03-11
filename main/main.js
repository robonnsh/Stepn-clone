// after reload page starts from animation
if (performance.getEntriesByType("navigation")[0].type === "reload") {
  window.location.href = "../loading/animation.html";
}
//Text Scroll animation
const the_animation = document.querySelectorAll(".second-page-title");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.5 }
);
//
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];
  observer.observe(elements);
}

//Data slide Animation

const theAnimation = document.querySelectorAll(".animated-slide-items");

const observerSlide = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-slide-animation");
      } else {
        entry.target.classList.remove("scroll-slide-animation");
      }
    });
  },
  { threshold: 0.5 }
);
//
for (let i = 0; i < theAnimation.length; i++) {
  const elements = theAnimation[i];
  observerSlide.observe(elements);
}

// count animation
function countTo() {
  let from = 201024685300233;
  let formattedNumber = from.toLocaleString();
  let to = 601024685300233;
  let step = to > from ? 1 : -1;
  let interval = 20;
  if (from == to) {
    document.querySelector("#data-number-distance").textContent = from;
    document.querySelector("#data-number-carbon").textContent = from;
    document.querySelector("#data-number-calories").textContent = from;
    return;
  }
  let counter = setInterval(function () {
    from += step;
    formattedNumber = from.toLocaleString();
    document.querySelector("#data-number-distance").textContent =
      formattedNumber;
    document.querySelector("#data-number-carbon").textContent = formattedNumber;
    document.querySelector("#data-number-calories").textContent =
      formattedNumber;
  }, interval);
}
countTo();

// fourth page bg down

const theBgDown = document.querySelectorAll(".fourth-page-down");

const observerBgDown = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bg-down-animated");
      } else {
        entry.target.classList.remove("bg-down-animated");
      }
    });
  },
  { threshold: 0.7 }
);
//
for (let i = 0; i < theBgDown.length; i++) {
  const elements = theBgDown[i];
  observerBgDown.observe(elements);
}

// ambassador border animation

const squareAnimationL00 = document.querySelector(".l00");
const squareAnimationL0 = document.querySelector(".l0");
const squareAnimationL1 = document.querySelector(".l1");
const squareAnimationL2 = document.querySelector(".l2");
const squareAnimationL3 = document.querySelector(".l3");
const squareAnimationL4 = document.querySelector(".l4");
const squareAnimationL5 = document.querySelector(".l5");
const squarePin = document.getElementById("square-pin");
const animatedPinBg = document.querySelector(".animated-pin-bg");

const observerSquare = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        squareAnimationL00.classList.add("L00-animation");
        squareAnimationL0.classList.add("L0-animation");
        squareAnimationL1.classList.add("L1-animation");
        squareAnimationL2.classList.add("L2-animation");
        squareAnimationL3.classList.add("L3-animation");
        squareAnimationL4.classList.add("L4-animation");
        squareAnimationL5.classList.add("L5-animation");
        squarePin.classList.add("pin-reveal");
        animatedPinBg.classList.add("animated-pin-reveal");
      } else {
        squareAnimationL00.classList.remove("L00-animation");
        squareAnimationL0.classList.remove("L0-animation");
        squareAnimationL1.classList.remove("L1-animation");
        squareAnimationL2.classList.remove("L2-animation");
        squareAnimationL3.classList.remove("L3-animation");
        squareAnimationL4.classList.remove("L4-animation");
        squareAnimationL5.classList.remove("L5-animation");
        squarePin.classList.remove("pin-reveal");
        animatedPinBg.classList.remove("animated-pin-reveal");
      }
    });
  },
  { threshold: 0.9 }
);

observerSquare.observe(
  squareAnimationL0,
  squareAnimationL00,
  squareAnimationL1,
  squareAnimationL2,
  squareAnimationL3,
  squareAnimationL4,
  squareAnimationL5,
  squarePin,
  animatedPinBg
);

// ambassador visibility
const squareAnimationReveal = document.querySelector(".square-animation-bg");
const pinReveal = document.querySelector("#square-pin");
const pinBgReveal = document.querySelector(".animated-pin-reveal");
const observerReveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          squareAnimationReveal.style.visibility = "visible";
          pinReveal.style.visibility = "visible";
          pinBgReveal.style.visibility = "visible";
        }, 6400);
      } else {
        squareAnimationReveal.style.visibility = "hidden";
        pinReveal.style.visibility = "hidden";
        pinBgReveal.style.visibility = "hidden";
      }
    });
  },
  { threshold: 0.9 }
);

observerReveal.observe(squareAnimationReveal, pinReveal, pinBgReveal);

// hidden title and chart for the fifth page
var diva = document.getElementById("diva");
var divb = document.getElementById("divb");
var green = document.getElementById("chart-visible");
var pink = document.getElementById("chart-hidden");
var greenTitle = document.getElementById("chart-visible-title");
var pinkTitle = document.getElementById("chart-hidden-title");

diva.addEventListener("click", () => {
  green.style.display = "block";
  pink.style.display = "none";
  greenTitle.style.display = "block";
  pinkTitle.style.display = "none";
});

divb.addEventListener("click", () => {
  green.style.display = "none";
  pink.style.display = "block";
  greenTitle.style.display = "none";
  pinkTitle.style.display = "block";
});

// popup
let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};

const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};

//scroll top
function scrollToTop() {
  window.scrollTo(0, 0);
}
