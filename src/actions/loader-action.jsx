import * as types from './action-types.jsx';

export function showLoader() {
    return {type: types.SHOW_LOADER};
}

export function hideLoader() {
    return {type: types.HIDE_LOADER};
}


