import createHTMLElement from "../../functions/create-html-element";

function loadMenu() {
  const menu = createHTMLElement("section", "menu");

  //*  add title
  const menuTitle = createHTMLElement("h1", "title", "Restaurant Menu");
  menu.appendChild(menuTitle);

  // add div container for the foods of menu
  const foodGrid = createHTMLElement("div", "food-grid");

  // add entry food to the menu
  const entryFood = createHTMLElement("div", "food-item");
  entryFood.appendChild(createHTMLElement("h2", "subtitle", "Bruschetta"));
  const entryImg = createHTMLElement("img", "food-image");
  entryImg.setAttribute("src", "../src/assets/bruschetta.png");
  entryFood.appendChild(entryImg);
  entryFood.appendChild(
    createHTMLElement(
      "p",
      "food-description",
      "A classic Italian appetizer consisting of grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil."
    )
  );
  entryFood.appendChild(createHTMLElement("p", "food-price", "Price: $4.50"));
  foodGrid.appendChild(entryFood);

  // add main course to the menu
  const mainFood = createHTMLElement("div", "food-item");
  mainFood.appendChild(
    createHTMLElement("h2", "subtitle", "Risotto alla Milanese")
  );
  const mainImg = createHTMLElement("img", "food-image");
  mainImg.setAttribute("src", "../src/assets/risoto_milanes_com_ossobuco.png");
  mainFood.appendChild(mainImg);
  mainFood.appendChild(
    createHTMLElement(
      "p",
      "food-description",
      "This creamy rice dish is made with saffron, butter, onion, Parmesan cheese, and white wine. It is a classic Milanese recipe and is often served with Osso Buco."
    )
  );
  mainFood.appendChild(createHTMLElement("p", "food-price", "Price: $15.00"));
  foodGrid.appendChild(mainFood);

  // add dessert  to the menu
  const dessert = createHTMLElement("div", "food-item");
  dessert.appendChild(createHTMLElement("h2", "subtitle", "Tiramisu"));
  const dessertImg = createHTMLElement("img", "food-image");
  dessertImg.setAttribute("src", "../src/assets/tiramisu.png");
  dessert.appendChild(dessertImg);
  dessert.appendChild(
    createHTMLElement(
      "p",
      "food-description",
      "A popular Italian dessert made with layers of ladyfingers soaked in espresso and coffee liqueur, mascarpone cheese, and cocoa powder. It is a rich and indulgent treat that is perfect for satisfying your sweet tooth."
    )
  );
  dessert.appendChild(createHTMLElement("p", "food-price", "Price: $8.00"));
  foodGrid.appendChild(dessert);

  menu.appendChild(foodGrid);

  return menu;
}

export default loadMenu;
