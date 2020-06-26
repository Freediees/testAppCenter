import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  fetchData: ['payload'],
  fetchLoading: null,
  fetchFailure: ['payload'],
  fetchSuccess: ['payload'],
});

export const JoinTypes = Types;
export default Creators;
