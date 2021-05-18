window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home").classList.add("active");
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});

const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio-item-img")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}
document
  .querySelector(".portfolio-popup-close")
  .addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio-popup-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".portfolio-popup-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item img").src;

  document.querySelector(".portfolio-popup-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".portfolio-popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  hideSection();
  toggleNavbar();
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    burger.classList.add("hide");
    burger.classList.remove("active");
    document.querySelector(".toggle").classList.add("hide");
    if (e.target.classList.contains("nav-link")) {
      document.body.classList.add("hide-scrolling");
      toggleNavbar();
    } else {
      hideSection();
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      burger.classList.remove("hide");
      document.querySelector(".toggle").classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

window.onload = function () {
  const parallax = document.querySelector(".home");
  const bg = document.querySelector(".home__avatar");
  const forBg = 20;
  const speed = 0.05;
  let positionX = 0;
  let positionY = 0;
  let coordXpercent = 0;
  let coordYpercent = 0;

  function setMouseParallaxStyle() {
    const distX = coordXpercent - positionX;
    const distY = coordYpercent - positionY;
    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;
    bg.style.transform = `translate(${positionX / forBg}%, ${
      positionY / forBg
    }%)`;
    requestAnimationFrame(setMouseParallaxStyle);
  }
  setMouseParallaxStyle();

  parallax.addEventListener("mousemove", function (e) {
    const parallaxWidth = parallax.offsetWidth;
    const parallaxHeight = parallax.offsetHeight;
    const coordX = e.pageX - parallaxWidth / 2;
    const coordY = e.pageY - parallaxHeight / 2;
    coordXpercent = (coordX / parallaxWidth) * 100;
    coordYpercent = (coordY / parallaxHeight) * 100;
  });
};
