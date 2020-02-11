import {takeLatest, all} from 'redux-saga/effects';
import API from '../Services/Api';
import NewsApi from '../Services/NewsApi';

import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import {StartupTypes} from '../Redux/StartupRedux';
import {GithubTypes} from '../Redux/GithubRedux';
import {NewsTypes} from '../Redux/NewsRedux';

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas';
import {getUserAvatar} from './GithubSagas';
import {getHeadlines, getNewsFeed} from './NewsSagas';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
const newsApi = NewsApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(NewsTypes.GET_HEADLINES_REQUEST, getHeadlines, newsApi),
    takeLatest(NewsTypes.GET_NEWS_FEED_REQUEST, getNewsFeed, newsApi),
  ]);
}
