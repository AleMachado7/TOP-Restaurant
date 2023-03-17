import createHTMLElement from "../../functions/create-html-element";

function loadContact() {
  const contacts = createHTMLElement("section", "contact");

  // add title
  const contactsTitle = createHTMLElement("h1", "title", "Contact Us");
  contacts.appendChild(contactsTitle);

  // add contact details
  const contactDetails = createHTMLElement("div", "large-container");
  contactDetails.appendChild(
    createHTMLElement("p", "subtitle", "Reach us ou!")
  );
  contactDetails.appendChild(
    createHTMLElement("p", "large-text", "Telephone: +55 31 9999999999")
  );
  contactDetails.appendChild(
    createHTMLElement(
      "p",
      "large-text",
      "Email: totaly-trustworthy-mail@validmail.com"
    )
  );

  contacts.appendChild(contactDetails);
  return contacts;
}

export default loadContact;
