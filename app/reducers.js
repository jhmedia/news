import { combineReducers } from 'redux';
import frontPageReducer from './containers/FrontPage/reducer';

export default () => {
    const rootReducer = combineReducers({
        main: frontPageReducer,
    });
    return rootReducer;
};
