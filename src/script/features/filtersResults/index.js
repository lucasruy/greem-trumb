import scrollToElement from "components/scrollToElement";
import getResults from "features/getResults";

/**
 * filterResults
 * --
 * This method filters results based on user-selected parameters
 */
const filterResults = () => {
  const selectWrapper = document.querySelectorAll(".select");
  const params = [{ sun: null }, { water: null }, { pets: null }];

  const setParams = (detail) => {
    params.map((item) => {
      if (detail.type in item) {
        item[detail.type] = detail.value;
      }
      return item;
    });
  };

  const handleResultsData = (evt) => {
    setParams(evt.detail);

    const hasRequiredParams = params
      .flatMap((item) => Object.values(item))
      .every((item) => item !== null);

    if (hasRequiredParams) {
      const resultsTitle = document.querySelector(".results .resultstitle");
      const requestParams = params.reduce(
        (object, currentParam) => Object.assign(object, currentParam),
        {}
      );

      getResults(requestParams);
      scrollToElement(resultsTitle, 300, {
        block: "start",
        behavior: "smooth"
      });
    }
  };

  selectWrapper.forEach((currentSelect) => {
    currentSelect.addEventListener("customSelectChange", handleResultsData);
  });
};

export default filterResults;
