import * as actionTypes from "./actionTypes";
import { CurrentPrices } from "./types";

export const fetchCurrentPricesRequest = () => {
  return {
    type: actionTypes.FETCH_CURRENT_PRICES_REQUEST,
  };
};

export const fetchCurrentPricesSuccess = (currentPrices: CurrentPrices) => {
  return {
    type: actionTypes.FETCH_CURRENT_PRICES_SUCCESS,
    payload: currentPrices,
  };
};

export const fetchCurrentPricesError = (error: Error) => {
  return {
    type: actionTypes.FETCH_CURRENT_PRICES_ERROR,
    payload: error,
  };
};

