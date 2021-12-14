/**
 * select
 * ---
 * Function responsible for handling state changes of the "select" component.
 *
 * Mandatory html structure for function to work as expected:
 * ```
 * <div class="select">
 *   <div class="selected">Select…</div>
 *   <div class="items">
 *     <div class="option" data-type="water" data-value="rarely">
 *       Rarely
 *     </div>
 *     <div class="option" data-type="water" data-value="regularly">
 *       Regularly
 *     </div>
 *     <div class="option" data-type="water" data-value="daily">
 *       Daily
 *     </div>
 *   </div>
 * </div>
 * ```
 */
const select = () => {
  const selectWrapper = document.querySelectorAll(".select");

  if (selectWrapper.length === 0) {
    throw new Error('Could not find ".select" element in the DOM tree');
  }

  const handleSelectState = (evt) => {
    const currentSelect = evt.currentTarget;

    const selectedTextContent = evt.target.textContent;
    const selectedType = evt.target.dataset.type;
    const selectedValue = evt.target.dataset.value;
    const selectDefaultItem = currentSelect.querySelector(".selected");

    currentSelect.classList.toggle("is-active");

    if (typeof selectedValue !== "undefined") {
      const selectEvent = new CustomEvent("customSelectChange", {
        detail: {
          type: selectedType,
          value: selectedValue
        }
      });

      selectDefaultItem.textContent = selectedTextContent;
      selectDefaultItem.setAttribute("data-type", selectedType);
      selectDefaultItem.setAttribute("data-value", selectedValue);
      currentSelect.dispatchEvent(selectEvent);
    }
  };

  selectWrapper.forEach((currentSelect) => {
    currentSelect.addEventListener("click", handleSelectState);
  });
};

export default select;
