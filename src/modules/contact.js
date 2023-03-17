import createHTMLElement from "../../functions/create-html-element";

function loadContact() {
  const contacts = createHTMLElement("section", "contact");

  // add title
  const contactsTitle = createHTMLElement("h1", "title", "Contact Us");
  contacts.appendChild(contactsTitle);

  return contacts;
}

export default loadContact;
