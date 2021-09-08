import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchUser(action) {
  try {
    const fetchUser = () =>
      new Promise((res, rej) =>
        setTimeout(() => {
          if (action.payload.id === 0) res({ name: "Huy hehe" });
          else rej("Fetch user error");
        }, 2000)
      );

    yield put({ type: "SHOW_LOADING", payload: true });
    const user = yield call(fetchUser);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
  } catch (error) {
    yield put({ type: "USER_FETCH_FAILED", payload: error });
  } finally {
    yield put({ type: "SHOW_LOADING", payload: false });
  }
}

// export function* saga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

export function* saga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
