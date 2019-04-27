import repoSagas from './containers/FrontPage/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
    try {
        yield all([
            fork(repoSagas)
        ]);
    } catch (err) {
        console.error(err);
    }
}

export default rootSaga;
