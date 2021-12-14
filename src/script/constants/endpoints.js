/**
 * Plants Service URL
 * --
 * Endpoint returns plans based on the query parameters used in the call
 * @param {String} sun Quantity of light the plant needs. Values: `no`, `low`, `high`
 * @param {String} water Amount of water the plant needs. Values: `regularly`, `daily`, `rarely`
 * @param {Boolean} pets If you have a pet. Values: `true`, `false`
 */
export const PLANTS_SERVICE_URL =
  "https://front-br-challenges.web.app/api/v2/green-thumb/";
