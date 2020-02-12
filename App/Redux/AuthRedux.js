import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['username'],
  logoutRequest: null,
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: '',
});

/* ------------- Reducers ------------- */

export const requestLogin = (state, action) =>
  state.merge({username: action.username});

export const requestLogout = state => state.merge({username: ''});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: requestLogin,
  [Types.LOGOUT_REQUEST]: requestLogout,
});
