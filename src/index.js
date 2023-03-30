import pageLoad from "./modules/page-load";
import "./style.css";
import "./assets/background.png";
import "./assets/bruschetta.png";
import "./assets/logo.png";
import "./assets/risoto_milanes_com_ossobuco.png";
import "./assets/tiramisu.png";

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
