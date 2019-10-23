export const NAVINDEX = "NAVINDEX";
export const NAVSTATE = "NAVSTATE";

export function navindex(path) {
    return {
        type: NAVINDEX,
        _path:path
    }
}

export function navstate(path) {
    return {type: NAVSTATE}
}
