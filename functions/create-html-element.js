function createHTMLElement(elementTag, elementId, elementText) {
  const newElement = document.createElement(elementTag);
  newElement.setAttribute("id", elementId);
  newElement.textContent = elementText;

  return newElement;
}

export default createHTMLElement;
