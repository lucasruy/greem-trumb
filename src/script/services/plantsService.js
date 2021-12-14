import axios from "axios";

import { PLANTS_SERVICE_URL } from "constants/endpoints";

const DEFAULT_PARAMS = {
  sun: "high",
  water: "regularly",
  pets: false
};

/**
 * plantsService
 * --
 * Abstraction for making a request in PLANTS_SERVICE_URL. Data returned based on submitted parameters
 *
 * @param {String} sun Quantity of light the plant needs. Values: `no`, `low`, `high`
 * @param {String} water Amount of water the plant needs. Values: `regularly`, `daily`, `rarely`
 * @param {Boolean} pets If you have a pet. Values: `true`, `false`
 */
const plantsService = async (params = DEFAULT_PARAMS) => {
  const REQUEST_CONFIG = {
    method: "GET",
    url: PLANTS_SERVICE_URL,
    timeout: 5000,
    params
  };

  const handleData = ({ data }) => {
    return data;
  };

  const handleError = ({ response }) => {
    return response;
  };

  return await axios(REQUEST_CONFIG).then(handleData).catch(handleError);
};

export default plantsService;
