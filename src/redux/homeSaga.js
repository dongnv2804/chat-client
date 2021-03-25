import { call, put, takeLatest } from "redux-saga/effects";
import * as action from "./action";
import * as sliceAct from "./slice";
import api from "../api";

function* login({ payload }) {
  const { value, resolve, reject } = payload;
  try {
    const { data } = yield call(api.login, value);
    yield put(sliceAct.loginSucess(data));
    yield resolve(data);
  } catch (error) {
    console.log(error);
    yield reject(error);
  }
}

function* register({ payload }) {
  const { value, resolve, reject } = payload;
  try {
    const { data } = yield call(api.register, value);
    yield resolve(data);
  } catch (error) {
    yield reject(error);
  }
}

function* getRooms({ payload }) {
  const { userId } = payload;
  try {
    const { data } = yield call(api.getRooms, userId);
    yield put(sliceAct.getRoomsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(action.login, login);
  yield takeLatest(action.register, register);
  yield takeLatest(action.getRooms, getRooms);
}
