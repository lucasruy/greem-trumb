import buildProductGrid from "features/buildProductGrid";
import plantsService from "services/plantsService";

/**
 * getResults
 * --
 * Get results from PLANTS_SERVICE_URL to show in the screen.
 * @param {Object} params Object containing the query params required by the PLANTS_SERVICE_URL
 * @property {String} params.sun Receives a string with data about lighting that the plant needs
 * @property {String} params.water Receives a string with data on the amount of water the plant needs
 * @property {Boolean} params.pets Receives a boolean value if you have a pet or not
 */
const getResults = async (params = null) => {
  const resultsWrapper = document.querySelector(".results");
  const notFoundWrapper = document.querySelector(".notfound");

  try {
    const requestParams = params !== null ? params : undefined;
    const response = await plantsService(requestParams);

    await buildProductGrid(response);

    notFoundWrapper.classList.add("-hidden");
    resultsWrapper.classList.remove("-hidden");
  } catch (error) {
    resultsWrapper.classList.add("-hidden");
    notFoundWrapper.classList.remove("-hidden");
  }
};

export default getResults;
