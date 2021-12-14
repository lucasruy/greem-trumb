const DEFAULT_OPTIONS = {
  block: "center",
  behavior: "smooth"
};

/**
 * scrollToElement
 * ---
 * scrolls the page to a given element passed via parameter.
 * @param {Node} el DOM element you want scroll to show on screen
 * @param {Number} delay Delay to dispatch scroll
 * @param {Object} options Settings to adjust scrolling behavior
 * @property {String} options.block Location where you want to center the element
 * @property {String} options.behavior How the scroll will run, instant, smooth or auto
 */
const scrollToElement = (el, delay = 0, options = DEFAULT_OPTIONS) => {
  if (!el) {
    throw new Error('The parameter "el" cannot be undefined or null');
  }

  return setTimeout(() => {
    el.scrollIntoView(options);
  }, delay);
};

export default scrollToElement;
