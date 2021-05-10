window.addEventListener('load', () => {
  document.querySelector('.main').classList.remove('hidden');
  document.querySelector('.home').classList.add('active');
  document.querySelector('.page-loader').classList.add('fade-out');
  setTimeout(() => {
    document.querySelector('.page-loader').style.display = 'none';
  }, 600);
});

console.log('alihan pedik');
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
  document.querySelector(
    ".portfolio-popup-thumbnail img"
  ).src = portfolioItem.querySelector(".portfolio-item img").src;

  document.querySelector(
    ".portfolio-popup-header h3"
  ).innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(
    ".portfolio-popup-body"
  ).innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
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
    if (e.target.classList.contains("nav-link")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      burger.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});
