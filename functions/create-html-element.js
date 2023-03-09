function createHTMLElement(elementTag, elementClass, elementText) {
  const newElement = document.createElement(elementTag);
  newElement.setAttribute("class", elementClass);
  newElement.textContent = elementText;

  return newElement;
}

export default createHTMLElement;
