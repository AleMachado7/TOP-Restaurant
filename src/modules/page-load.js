import loadHeader from "./header";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(loadHeader());
  content.appendChild(loadHome());
  content.appendChild(loadMenu());
  content.appendChild(loadContact());
}

export default pageLoad;
