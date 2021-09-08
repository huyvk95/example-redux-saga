import { all } from "redux-saga/effects";

import { userSaga } from "./user";

export function* saga() {
  yield all([userSaga()]);
}
