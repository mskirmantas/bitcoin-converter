import { Reducer } from "redux";
import * as actionTypes from "../actionTypes";
import { CurrentPrices } from '../types'

export interface CurrentPricesReducerState {
  isLoading: boolean;
  currentPrices: CurrentPrices;
  error?: Error;
}

export const initialState: CurrentPricesReducerState = {
  isLoading: false,
  currentPrices: {
    EUR: null,
    USD: null,
    GBP: null
  },
  error: undefined,
};

export const currentPricesReducer: Reducer<CurrentPricesReducerState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_PRICES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.FETCH_CURRENT_PRICES_SUCCESS: {
      return {
        isLoading: false,
        currentPrices: {
          EUR: action.payload.EUR.rate_float,
          USD: action.payload.USD.rate_float,
          GBP: action.payload.GBP.rate_float
        },
        error: undefined,
      };
    }
    case actionTypes.FETCH_CURRENT_PRICES_ERROR: {
      return {
        isLoading: false,
        currentPrices: {
          EUR: null,
          USD: null,
          GBP: null
        },
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
