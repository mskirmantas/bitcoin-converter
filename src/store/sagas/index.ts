import { all, fork } from "redux-saga/effects";
import currentPricesSaga from "./currentPricesSaga";

function* rootSaga() {
  yield all([fork(currentPricesSaga)]);
}

export default rootSaga;
