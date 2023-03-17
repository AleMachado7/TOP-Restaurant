import pageLoad from "./modules/page-load";

pageLoad();

// add tab effect to the page
const tabs = document.querySelectorAll(".header-item");
const contents = document.querySelectorAll("section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(`.${tab.textContent.toLowerCase()}`);
    contents.forEach((content) => content.classList.remove("active"));
    target.classList.add("active");
  });
});
