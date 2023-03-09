import createHTMLElement from "../../functions/create-html-element";

function loadMenu() {
  const menu = createHTMLElement("section", "menu");
  const menuTitle = createHTMLElement("h1", "menu-title", "Menu");

  menu.appendChild(menuTitle);

  return menu;
}

export default loadMenu;
