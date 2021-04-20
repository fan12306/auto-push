import {SET_LOGIN, SET_PERMISSIONS, SET_USERINFO, SET_LOGOUT} from "@/store/action-types";

const defaultStore = {
    userInfo: {}, // 用户信息
    permissions: {}, // 用户权限
    isLogin: false // 是否已经登录
}

//eslint-disable-next-line
export default (store = defaultStore, actions) => {
    let newStore = JSON.parse(JSON.stringify(store));
    switch (actions.type) {
        case SET_USERINFO:
            newStore.userInfo = actions.value;
            return newStore;
        case SET_PERMISSIONS:
            newStore.permissions = actions.value;
            return newStore;
        case SET_LOGIN:
            newStore.isLogin = true;
            return newStore;
        case SET_LOGOUT:
            newStore.isLogin = false;
            return newStore;
        default:
            return store
    }
}