import select from "components/select";
import goToElement from "features/goToElement";
import filtersResults from "features/filtersResults";
import getResults from "features/getResults";

/**
 * home
 * --
 * Run the methods that have interactions on the home page.
 */
const homeInit = async () => {
  select();
  goToElement(".nextsection", ".filters-section");
  goToElement(".results .button", ".filters-section");
  filtersResults();
  getResults();
};

// It doesn't work inside Codesandbox and I don't know why :c
// document.addEventListener("DOMContentLoaded", homeInit);
homeInit();
