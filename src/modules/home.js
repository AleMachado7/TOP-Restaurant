import createHTMLElement from "../../functions/create-html-element";

function loadHome() {
  const homeSection = createHTMLElement("section", "home-content");

  // create header
  const header = createHTMLElement("header", "header");
  const contentItems = createHTMLElement("ul", "content-items");
  const homeContent = createHTMLElement("li", "header-home", "Home");
  const menuContent = createHTMLElement("li", "header-menu", "Menu");
  const contactContent = createHTMLElement("li", "header-contact", "Contact");

  contentItems.append(homeContent, menuContent, contactContent);
  header.appendChild(contentItems);
  homeSection.appendChild(header);

  // add title
  const homeTitle = createHTMLElement(
    "h1",
    "home-title",
    "Ciao Bella Restaurant"
  );
  homeSection.appendChild(homeTitle);

  // add logo
  const homeLogo = createHTMLElement("img", "home-logo");
  homeLogo.setAttribute("src", "../src/assets/logo.webp");
  homeSection.appendChild(homeLogo);

  //add description
  const homeDescription = createHTMLElement("p", "home-description");
  homeDescription.textContent = `Welcome to Ciao Bella, where authentic Italian cuisine meets warm and sophisticated hospitality. Our
                    menu features delicious dishes, from fresh salads to homemade pastas, crispy pizzas, and grilled
                    meats. Don't forget to try our artisanal desserts and carefully selected Italian wines. Join us for
                    a romantic dinner for two, a gathering with friends, or a special celebration. Let our attentive
                    staff take care of everything for you. Ciao Bella, where the food is always delicious and the
                    hospitality is unmatched.`;
  homeSection.appendChild(homeDescription);

  return homeSection;
}

export default loadHome;
