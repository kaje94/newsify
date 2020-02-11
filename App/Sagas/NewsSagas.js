import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import NewsActions from '../Redux/NewsRedux';

export function* getHeadlines(api, action) {
  // make the call to the api
  const response = yield call(api.getHeadlines);

  if (response.ok) {
    const articles = path(['data', 'articles'], response);
    yield put(NewsActions.getHeadlinesSuccess(articles));
  } else {
    yield put(NewsActions.getHeadlinesFailure());
  }
}

export function* getNewsFeed(api, action) {
  // make the call to the api
  console.log('in saga', action);
  const response = yield call(api.getNewsFeed, action.query);

  if (response.ok) {
    const articles = path(['data', 'articles'], response);
    yield put(NewsActions.getNewsFeedSuccess(articles));
  } else {
    yield put(NewsActions.getNewsFeedFailure());
  }
}
