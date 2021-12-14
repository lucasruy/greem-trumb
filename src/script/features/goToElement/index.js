import scrollToElement from "components/scrollToElement";

/**
 * goToElement
 * ---
 * Scrolls page automatic to the choose element
 * @param {String} triggerSelector Selector of the element that will trigger the action
 * @param {String} targetSelector Selector of the element you want to go
 */
const goToElement = (triggerSelector, targetSelector) => {
  const trigger = document.querySelector(triggerSelector);
  const target = document.querySelector(targetSelector);

  trigger.addEventListener("click", () => {
    scrollToElement(target);
  });
};

export default goToElement;
