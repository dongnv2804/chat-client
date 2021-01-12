import { combineReducers } from "redux";
import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import homeReducer from "./redux/slice";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  home: homeReducer,
});
export default configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleWare,
  ],
});
sagaMiddleWare.run(rootSaga);
