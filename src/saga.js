import { fork } from "redux-saga/effects";
import homeSaga from "./redux/homeSaga";

export default function* rootSaga() {
  yield fork(homeSaga);
}
