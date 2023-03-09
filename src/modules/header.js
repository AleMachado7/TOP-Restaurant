import createHTMLElement from "../../functions/create-html-element";

function loadHeader() {
  const header = createHTMLElement("header", "header");
  const headerContainer = createHTMLElement("ul", "header-container");

  const itemHome = createHTMLElement("li", "header-item", "Home");
  const itemMenu = createHTMLElement("li", "header-item", "Menu");
  const itemContact = createHTMLElement("li", "header-item", "Contact");

  headerContainer.append(itemHome, itemMenu, itemContact);
  header.appendChild(headerContainer);

  return header;
}

export default loadHeader;
