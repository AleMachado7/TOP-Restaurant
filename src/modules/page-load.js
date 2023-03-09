import loadHome from "./home";
import loadMenu from "./menu";

function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(loadHome());
  content.appendChild(loadMenu());
}

export default pageLoad;
