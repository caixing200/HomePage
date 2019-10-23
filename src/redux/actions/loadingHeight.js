export const LOADHEIGHT = "LOADHEIGHT";
export const BANNERHEIGHT = "BANNERHEIGHT";

export function loadingheight(height) {
    return {
        type: LOADHEIGHT,
        _height:height
    }
}
export function bannerheight(height) {
    return {
        type: BANNERHEIGHT,
        _bannerHeight:height
    }
}