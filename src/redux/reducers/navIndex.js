import {NAVINDEX, NAVSTATE} from '../actions/navIndex';

/*
* 初始化state
 */

const initState = {
    _path: '/'
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case NAVINDEX:
            return {
                _path: action._path
            };
        case NAVSTATE:
            return {
                _path: action._path
            };
        default:
            return state
    }
}
