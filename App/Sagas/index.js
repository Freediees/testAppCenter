import {takeLatest, all} from 'redux-saga/effects';
import {ExampleTypes} from 'App/Stores/Example/Actions';
import {StartupTypes} from 'App/Stores/Startup/Actions';
import {JoinTypes} from 'scenes/joinPrint/store/action';
import {fetchUser} from './ExampleSaga';
import {startup} from './StartupSaga';
import {fetchData} from 'scenes/joinPrint/saga';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(JoinTypes.FETCH_DATA, fetchData),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ]);
}
