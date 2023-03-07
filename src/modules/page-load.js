import loadHome from "./home";

function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(loadHome());
}

export default pageLoad;
