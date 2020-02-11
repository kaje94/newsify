import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getHeadlinesRequest: null,
  getHeadlinesSuccess: ['data'],
  getHeadlinesFailure: ['error'],
  getNewsFeedRequest: ['query'],
  getNewsFeedSuccess: ['data'],
  getNewsFeedFailure: ['error'],
});

export const NewsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingHeadlines: false,
  headlines: [],
  error: null,
  newsFeed: [],
  fetchingNewsFeed: false,
});

/* ------------- Reducers ------------- */

export const requestHeadlines = state => state.merge({fetchingHeadlines: true});

export const successHeadlines = (state, action) => {
  const {data} = action;
  return state.merge({fetchingHeadlines: false, error: null, headlines: data});
};

export const failureHeadlines = state =>
  state.merge({fetchingHeadlines: false, error: true});

export const requestNewsFeed = state => state.merge({fetchingNewsFeed: true});

export const successNewsFeed = (state, action) => {
  const {data} = action;
  return state.merge({fetchingNewsFeed: false, error: null, newsFeed: data});
};

export const failureNewsFeed = state =>
  state.merge({fetchingNewsFeed: false, error: true});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_HEADLINES_REQUEST]: requestHeadlines,
  [Types.GET_HEADLINES_SUCCESS]: successHeadlines,
  [Types.GET_HEADLINES_FAILURE]: failureHeadlines,
  [Types.GET_NEWS_FEED_REQUEST]: requestNewsFeed,
  [Types.GET_NEWS_FEED_SUCCESS]: successNewsFeed,
  [Types.GET_NEWS_FEED_FAILURE]: failureNewsFeed,
});
