import {call, put} from 'redux-saga/effects';
import JoinAction from 'scenes/joinPrint/store/action';
import {getToken, getData} from 'services/dataServices';

export function* fetchData({payload}) {
  yield put(JoinAction.fetchLoading());

  const json = yield call(getToken);
  //console.log(json);

  if (json) {
    if (json.status == 200) {
      const token = json.data.access_token;
      const newPayload = {
        token: `Bearer ${token}`,
        page: payload,
      };
      const json2 = yield call(getData, newPayload);
      //console.log(json2);
      if (json2) {
        if (json2.status == 200) {
          console.log('success');
          console.log(json2.data.data);
          yield put(JoinAction.fetchSuccess(json2.data.data));
        }
      }
    }
  }
}
