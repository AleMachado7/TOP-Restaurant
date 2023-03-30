import createHTMLElement from "../../functions/create-html-element";

function loadHome() {
  const home = createHTMLElement("section", "home");
  home.classList.add("active"); // default home as active tab

  // add title
  const homeTitle = createHTMLElement("h1", "title", "Ciao Bella Restaurant");
  home.appendChild(homeTitle);

  // add logo
  const homeLogo = createHTMLElement("img", "logo");
  homeLogo.setAttribute("src", "../src/assets/logo.png");
  home.appendChild(homeLogo);

  //add description
  const homeText = createHTMLElement("div", "large-container");
  const homeSubtext = createHTMLElement("div", "large-container");

  homeText.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Welcome to Ciao Bella, where authentic Italian cuisine meets warm and sophisticated hospitality."
    )
  );
  homeText.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Our menu features delicious dishes, from fresh salads to homemade pastas, crispy pizzas, and grilled meats."
    )
  );
  homeText.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Don't forget to try our artisanal desserts and carefully selected Italian wines."
    )
  );

  home.appendChild(homeText);

  homeSubtext.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Join us for a romantic dinner for two, a gathering with friends, or a special celebration."
    )
  );

  homeSubtext.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Let our attentive staff take care of everything for you"
    )
  );

  homeSubtext.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Ciao Bella, where the food is always delicious and the hospitality is unmatched."
    )
  );

  home.appendChild(homeSubtext);

  return home;
}

export default loadHome;
