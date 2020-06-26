import {INITIAL_STATE} from './initialState';
import {createReducer} from 'reduxsauce';
import {JoinTypes} from './action';

export const fetchLoading = state => ({
  ...state,
  dataLoading: true,
  errorMessage: null,
});

export const fetchSuccess = (state, {payload}) => ({
  ...state,
  dataJoin: payload,
  dataLoading: false,
  errorMessage: null,
});

export const fetchFailure = (state, {payload}) => ({
  ...state,
  dataLoading: false,
  errorMessage: payload,
});

export const reducer = createReducer(INITIAL_STATE, {
  [JoinTypes.FETCH_LOADING]: fetchLoading,
  [JoinTypes.FETCH_SUCCESS]: fetchSuccess,
  [JoinTypes.FETCH_FAILURE]: fetchFailure,
});
