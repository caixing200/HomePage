import {LOADHEIGHT,BANNERHEIGHT} from '../actions/loadingHeight';

/*
* 初始化state
 */

const initState = {
    _height: 2000,
    _bannerHeight:300
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOADHEIGHT:
            return {
                _height: action.height
            };
        case BANNERHEIGHT:
            return {
                _bannerHeight: action.height
            };
        default:
            return state
    }
}
