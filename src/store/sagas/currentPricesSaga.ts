import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as actionTypes from "../actionTypes";

function* handleFetch() {
  try {
    const currentPrices = yield call(
      [axios, axios.get],
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    yield put(actions.fetchCurrentPricesSuccess(currentPrices.data.bpi));
  } catch (error) {
    yield put(actions.fetchCurrentPricesError(error));
  }
}

function* currentPricesSaga() {
  yield takeEvery(actionTypes.FETCH_CURRENT_PRICES_REQUEST, handleFetch);
}
export default currentPricesSaga;
