import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import navIndex from 'reducers/navIndex';
import loadingHeight from 'reducers/loadingHeight';


export default combineReducers({
    navIndex,
    loadingHeight
});