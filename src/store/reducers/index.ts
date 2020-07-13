import { combineReducers } from "redux";

import { CurrentPricesReducerState, currentPricesReducer } from "./curentPricesReducer";


export interface AppState {
  currentPrices: CurrentPricesReducerState;
}
const rootReducer = combineReducers({
  currentPrices: currentPricesReducer
});

export default rootReducer;
