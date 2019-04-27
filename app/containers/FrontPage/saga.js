import { takeLatest } from 'redux-saga/effects';
import { DISPATCH_SAGA } from './constants'
import { put, call } from 'redux-saga/effects';
import { frontPageAction } from './actions'
import { request } from 'utils/request';

function* initialFetch() {
    const search = 'Bolsonaro'
    const sinceDate = '2019-04-01'
    const url = `http://localhost:3006/news/keyword?search=${search}&sincedate=${sinceDate}`
    const response = yield call(request, url);
    const data = yield JSON.parse(response.text)
    yield put(frontPageAction({
        data
    }));
}

export default function* rootSaga() {
    yield takeLatest(DISPATCH_SAGA, initialFetch);
}
